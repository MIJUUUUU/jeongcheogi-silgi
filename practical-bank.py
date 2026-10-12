# Convert the retained bank to written practical exam exercises.
migrations={}
keep=[]
for q in bank:
 if q['type']=='choice' and q['prompt'].startswith('알맞은 용어를 고르세요.\n'):
  original=q['prompt'].split('\n',1)[1]
  target=next(x for x in bank if x['type']=='short' and x['prompt']==original)
  migrations[q['id']]=target['id']
  continue
 keep.append(q)
bank[:]=keep
rewrites={
'q86':('애자일의 핵심 가치를 완성하시오.\n계획을 따르는 것보다 (     )에 대응하는 것에 더 가치를 둔다.','변화',['변화','변경'],'애자일은 요구사항 변화에 유연하게 대응합니다.'),
'q87':('클래스의 속성·연산과 클래스 사이의 정적 관계를 표현하는 UML 다이어그램의 명칭을 쓰시오.','클래스 다이어그램',['클래스 다이어그램','Class Diagram'],'클래스 다이어그램은 시스템의 정적 구조를 나타냅니다.'),
'q88':('XP의 다섯 핵심 가치 중 빈칸에 해당하는 용어를 쓰시오.\n의사소통, 단순성, 용기, 피드백, (     )','존중',['존중','Respect'],'XP의 핵심 가치는 의사소통, 단순성, 용기, 피드백, 존중입니다.'),
'q89':('모듈 독립성을 높이는 설계 방향을 완성하시오.\n결합도는 (①), 응집도는 (②).\n①, ②를 순서대로 쓰시오.','낮게, 높게',['낮게, 높게','낮음, 높음','낮추고, 높인다','낮은, 높은'],'다른 모듈에 대한 의존은 낮추고 모듈 내부의 기능 관련성은 높입니다.'),
'q90':('입력값의 허용 범위 끝과 바로 주변 값을 집중적으로 검사하는 블랙박스 테스트 기법의 명칭을 쓰시오.','경계값 분석',['경계값 분석','Boundary Value Analysis'],'경계값과 그 직전·직후에서 발생하는 결함을 찾는 기법입니다.'),
'q91':('다음 SQL의 빈칸을 채우시오.\n(     ) SELECT ON Student TO learner;','GRANT',['GRANT'],'GRANT는 사용자에게 접근 권한을 부여합니다.'),
'q92':('SQL에서 그룹화 이전에 개별 행에 조건을 적용하는 절의 명칭을 쓰시오.','WHERE',['WHERE'],'WHERE로 행을 먼저 선택하고 GROUP BY로 그룹을 만든 뒤 HAVING으로 그룹을 제한합니다.'),
'q93':('교착 상태의 필요 조건을 완성하시오.\n상호 배제, 점유와 대기, 비선점, (     )','순환 대기',['순환 대기','Circular Wait'],'프로세스들이 자원을 순환 관계로 기다리는 조건입니다.'),
'q94':('OSI 7계층에서 응용 계층 바로 아래에 위치하여 데이터 표현 방식과 암호화·압축을 담당하는 계층의 명칭을 쓰시오.','표현 계층',['표현 계층','표현','Presentation Layer'],'표현 계층은 OSI 6계층입니다.'),
'q95':('블록 크기가 128비트이고 키 길이로 128·192·256비트를 사용하는 대칭키 암호 알고리즘의 약어를 쓰시오.','AES',['AES'],'AES는 대칭키 블록 암호 알고리즘입니다.'),
}
for q in bank:
 if q['id'] in rewrites:
  prompt,answer,aliases,explanation=rewrites[q['id']]
  q.update(prompt=prompt,answer=answer,aliases=aliases,explanation=explanation,type='blank' if '(     )' in prompt or '(①)' in prompt else 'short')
 q.pop('choices',None)
 if q['category'] in ['프로그래밍','계산'] or q['prompt'].startswith('T의 열 v에는'):q['type']='output'

def written(cat,kind,prompt,answer,explanation,page,sid=2,aliases=None):
 i=max(int(q['id'][1:]) for q in bank)+1
 bank.append(dict(id=f'q{i}',category=cat,type=kind,prompt=prompt,answer=answer,aliases=aliases or [answer],explanation=explanation,source=sid,page=page))
# Fill-in answers have a single target, so checking stays deterministic.
blanks=[
('데이터베이스','SELECT name FROM Student\n(     ) score >= 80;','WHERE','WHERE로 개별 행의 조건을 지정합니다.',22),
('데이터베이스','SELECT dept, COUNT(*) FROM Employee\n(     ) dept;','GROUP BY','GROUP BY는 같은 부서 값을 가지는 행들을 그룹화합니다.',23),
('데이터베이스','SELECT dept, AVG(salary) FROM Employee\nGROUP BY dept\n(     ) AVG(salary) >= 3000;','HAVING','집계된 그룹의 조건은 HAVING으로 지정합니다.',23),
('데이터베이스','SELECT name FROM Student\nORDER BY score (     );\n단, 점수가 높은 학생부터 출력한다.','DESC','DESC는 내림차순입니다.',23),
('데이터베이스','SELECT (     ) dept FROM Employee;\n단, 같은 부서명은 한 번만 출력한다.','DISTINCT','DISTINCT는 선택된 결과에서 중복을 제거합니다.',22),
('데이터베이스','UPDATE Employee\n(     ) salary = 4000\nWHERE id = 7;','SET','UPDATE에서 변경할 속성과 값은 SET으로 지정합니다.',24),
('데이터베이스',"INSERT INTO Student(id, name)\n(     ) (7, 'Mina');",'VALUES','VALUES 뒤에 추가할 행의 값을 나열합니다.',24),
('데이터베이스','(     ) FROM Student WHERE id = 7;\n단, 해당 학생의 행을 삭제한다.','DELETE','DELETE FROM으로 조건에 해당하는 행을 삭제합니다.',22),
('데이터베이스','SELECT * FROM Employee E JOIN Department D\n(     ) E.dept_id = D.id;','ON','JOIN의 결합 조건은 ON 절로 지정할 수 있습니다.',23),
('데이터베이스',"SELECT name FROM Student\nWHERE name (     ) 'K%';\n단, K로 시작하는 이름을 조회한다.",'LIKE','LIKE는 패턴을 이용한 문자열 비교입니다. %는 0개 이상의 문자에 대응합니다.',23),
('데이터베이스','SELECT * FROM Employee\nWHERE manager_id (     );\n단, 관리자가 지정되지 않은 행만 조회한다.','IS NULL','NULL 비교에는 = 대신 IS NULL을 사용합니다.',22),
('데이터베이스','(     ) SELECT ON Student FROM learner;\n단, learner의 조회 권한을 취소한다.','REVOKE','REVOKE는 이미 부여된 권한을 취소합니다.',22),
('소프트웨어','좋은 모듈 설계는 낮은 결합도와 높은 (     )를 지향한다.','응집도','응집도는 모듈 내부의 기능들이 얼마나 관련되어 있는지를 뜻합니다.',7),
('소프트웨어','상향식 통합 테스트는 상위 호출 모듈 대신 (     )를 사용한다.','드라이버','드라이버는 테스트 대상 모듈을 호출하고 입력을 제공합니다.',9),
('소프트웨어','하향식 통합 테스트는 미구현 하위 모듈 대신 (     )을 사용한다.','스텁','스텁은 호출받는 하위 모듈의 역할을 단순하게 대체합니다.',9),
('소프트웨어','객체지향 설계에서 확장에는 열리고 수정에는 닫혀 있어야 하는 원칙의 약어는 (     )이다.','OCP','OCP는 개방 폐쇄 원칙입니다.',7),
]
for cat,code,answer,e,page in blanks:
 written(cat,'blank','다음 빈칸에 들어갈 용어 또는 구문을 쓰시오.\n\n'+code,answer,e,page)
code_blanks=[
('Python','a = [1, 2]\na.(     )(3)\nprint(a)\n\n출력: [1, 2, 3]','append','append는 리스트 끝에 원소 하나를 추가합니다.',92),
('Python','a = [2, 4, 6, 8, 10]\nprint(a[1:4:(     )])\n\n출력: [4, 8]','2','인덱스 1과 3의 값을 얻으려면 증가값을 2로 지정합니다.',97),
('Python','f = (     ) x: x * x\nprint(f(3))\n\n출력: 9','lambda','lambda는 간단한 익명 함수를 정의합니다.',94),
('Python','print(17 (     ) 5)\n\n출력: 2','%','%는 나머지 연산자입니다.',96),
('C','int n = 4;\nint *p = (     )n;\nprintf("%d", *p);\n\n출력: 4','&','주소 연산자 &로 n의 주소를 포인터에 저장합니다.',77),
('C','int a[] = {3, 6, 9};\nprintf("%d", a[(     )]);\n\n출력: 9','2','배열의 인덱스는 0부터 시작하므로 세 번째 원소의 인덱스는 2입니다.',72),
('Java','int[] a = {1, 2, 3};\nSystem.out.print(a.(     ));\n\n출력: 3','length','Java 배열의 길이는 length 필드로 확인합니다.',85),
('Java','class Child (     ) Parent { }\n\n단, Child가 Parent 클래스를 상속한다.','extends','클래스 상속을 선언할 때 extends를 사용합니다.',90),
]
for lang,code,answer,e,page in code_blanks:
 written('프로그래밍','blank',f'다음 {lang} 코드의 빈칸을 채우시오.\nC 코드는 stdio.h를 포함한 main 함수 안에서 실행한다고 가정한다.\n\n{code}' if lang=='C' else f'다음 {lang} 코드의 빈칸을 채우시오.\n\n{code}',answer,e,page,1)
# SQL exercises constrain the requested syntax; supported equivalent forms are explicit aliases.
sqls=[
('Student(id, name, score) 테이블에서 모든 열과 행을 조회하시오. SELECT *를 사용하시오.','SELECT * FROM Student;','*는 모든 열을 선택하며 조건이 없으므로 모든 행을 조회합니다.'),
('Student(id, name, score) 테이블에서 score가 80 이상인 학생의 name만 조회하시오. 별칭은 사용하지 마시오.','SELECT name FROM Student WHERE score >= 80;','WHERE로 점수 조건을 적용한 뒤 name을 출력합니다.'),
('Student(id, name, score) 테이블에서 name, score를 이 순서로 조회하시오. score의 내림차순으로 정렬하고 별칭은 사용하지 마시오.','SELECT name, score FROM Student ORDER BY score DESC;','ORDER BY score DESC는 점수가 높은 행부터 정렬합니다.'),
('Employee(id, dept, salary) 테이블의 중복 없는 dept 값만 조회하시오. DISTINCT를 사용하시오.','SELECT DISTINCT dept FROM Employee;','DISTINCT로 중복 부서 값을 제거합니다.'),
("Student(id, name, score) 테이블에 id=7, name='Mina', score=90인 행을 삽입하시오. 열을 id, name, score 순서로 명시하시오.","INSERT INTO Student (id, name, score) VALUES (7, 'Mina', 90);",'명시한 열의 순서와 VALUES의 값 순서를 일치시킵니다.'),
('Employee(id, dept, salary) 테이블에서 id가 7인 직원의 salary를 4000으로 변경하시오.','UPDATE Employee SET salary = 4000 WHERE id = 7;','SET으로 변경 값을, WHERE로 대상 행을 지정합니다.'),
('Student(id, name, score) 테이블에서 id가 7인 행을 삭제하시오.','DELETE FROM Student WHERE id = 7;','WHERE가 없으면 모든 행을 삭제하므로 대상 조건을 명시합니다.'),
('Employee(id, dept, salary) 테이블에서 전체 행 수를 조회하시오. COUNT(*)를 사용하고 별칭은 생략하시오.','SELECT COUNT(*) FROM Employee;','COUNT(*)는 NULL 여부와 관계없이 모든 행을 셉니다.'),
('Employee(id, dept, salary) 테이블에서 dept, AVG(salary)를 이 순서로 조회하시오. 부서별로 그룹화하며 별칭은 생략하시오.','SELECT dept, AVG(salary) FROM Employee GROUP BY dept;','GROUP BY로 부서별 그룹을 만들고 AVG로 그룹의 평균 급여를 구합니다.'),
('Employee(id, dept, salary) 테이블에서 dept, COUNT(*)를 조회하시오. 부서별로 그룹화하며 3명 이상인 부서만 출력하시오. 별칭은 생략하시오.','SELECT dept, COUNT(*) FROM Employee GROUP BY dept HAVING COUNT(*) >= 3;','집계 함수 COUNT(*)에 대한 그룹 조건은 HAVING에 지정합니다.'),
('Employee(id, manager_id) 테이블에서 manager_id가 NULL인 행의 모든 열을 조회하시오. SELECT *를 사용하시오.','SELECT * FROM Employee WHERE manager_id IS NULL;','NULL을 찾을 때는 IS NULL 조건을 사용합니다.'),
('Student 테이블의 조회 권한을 learner 사용자에게 부여하시오.','GRANT SELECT ON Student TO learner;','권한 부여 구문은 GRANT 권한 ON 대상 TO 사용자입니다.'),
]
for prompt,answer,e in sqls:written('데이터베이스','sql',prompt+'\n키워드 대소문자·공백·마지막 세미콜론은 자유롭게 작성하시오.',answer,e,22)
essays=[
('데이터베이스','트랜잭션의 원자성과 지속성의 차이를 간단히 서술하시오.','원자성은 트랜잭션의 모든 연산이 전부 반영되거나 전부 취소되는 특성이다. 지속성은 성공적으로 완료된 트랜잭션의 결과가 장애 이후에도 보존되는 특성이다.','핵심: 원자성은 전부 성공 또는 전부 취소, 지속성은 완료 결과의 보존입니다.',10),
('데이터베이스','데이터베이스 정규화의 목적을 이상 현상과 관련하여 서술하시오.','데이터의 중복과 부적절한 종속 관계를 줄여 삽입·갱신·삭제 이상을 방지하고 데이터 무결성을 유지하기 위한 과정이다.','핵심: 중복 감소, 종속 관계 정리, 이상 현상 방지입니다.',11),
('데이터베이스','후보키가 만족해야 하는 두 조건을 쓰고 각각 설명하시오.','유일성과 최소성이다. 유일성은 튜플을 고유하게 식별할 수 있다는 뜻이고, 최소성은 키에서 속성을 하나라도 제거하면 유일성이 깨진다는 뜻이다.','핵심: 유일성 및 최소성을 함께 설명해야 합니다.',10),
('데이터베이스','SQL의 WHERE와 HAVING이 조건을 적용하는 대상의 차이를 서술하시오.','WHERE는 그룹화 전 개별 행을 필터링하며, HAVING은 GROUP BY로 만들어진 그룹에 조건을 적용한다.','핵심: WHERE는 행, HAVING은 그룹입니다.',23),
('소프트웨어','모듈 설계에서 결합도와 응집도의 의미 및 바람직한 방향을 서술하시오.','결합도는 모듈 간 의존 정도이고 응집도는 모듈 내부 요소의 기능적 관련 정도이다. 결합도는 낮추고 응집도는 높이는 것이 바람직하다.','핵심: 외부 의존 감소, 내부 관련성 증가입니다.',7),
('소프트웨어','회귀 테스트를 수행하는 이유를 서술하시오.','기능 추가나 코드 수정 후 기존에 정상 동작하던 기능에 새로운 결함이 발생하지 않았는지 확인하기 위해 수행한다.','핵심: 변경이 기존 기능에 미친 부작용을 확인합니다.',9),
('소프트웨어','화이트박스 테스트와 블랙박스 테스트의 관점 차이를 서술하시오.','화이트박스는 내부 코드의 구조와 논리 경로를 기준으로 검사한다. 블랙박스는 내부 구현보다 명세에 따른 입력과 출력의 동작을 검사한다.','핵심: 내부 구조와 외부 동작의 차이입니다.',8),
('소프트웨어','캡슐화의 의미와 장점을 간단히 서술하시오.','데이터와 이를 처리하는 메서드를 묶고 외부에서 내부 구현에 직접 접근하지 못하도록 제한한다. 내부 구현의 변경 영향을 줄이고 인터페이스를 통해 사용할 수 있게 한다.','핵심: 데이터·연산 묶음, 접근 제한, 변경 영향 감소입니다.',7),
('운영체제','페이징과 세그먼테이션의 분할 단위 차이를 서술하시오.','페이징은 프로그램과 메모리를 고정 크기 단위로 나누고, 세그먼테이션은 함수나 데이터 등 의미 있는 논리 단위를 서로 다른 크기로 나눈다.','핵심: 페이징은 고정 크기, 세그먼테이션은 가변 크기 논리 단위입니다.',13),
('운영체제','스래싱이 발생하는 상황과 성능이 저하되는 이유를 서술하시오.','필요한 페이지에 비해 프레임이 부족하여 페이지 부재가 빈번해지고, CPU가 실제 작업보다 페이지 교체에 많은 시간을 소비하여 성능이 떨어지는 현상이다.','핵심: 잦은 페이지 부재와 교체로 인한 처리 시간 감소입니다.',13),
('보안','대칭키 암호화와 비대칭키 암호화의 키 사용 방식 차이를 서술하시오.','대칭키는 암호화와 복호화에 같은 키를 사용한다. 비대칭키는 공개키와 개인키의 쌍을 사용하며 한 키로 암호화한 내용을 대응되는 다른 키로 복호화한다.','핵심: 동일한 키와 공개키·개인키 쌍의 차이입니다.',18),
('네트워크','TCP와 UDP의 연결 및 신뢰성 측면 차이를 서술하시오.','TCP는 연결을 설정하고 순서 제어 및 재전송 등으로 신뢰성 있는 전송을 제공한다. UDP는 연결 설정 없이 데이터그램을 보내며 전달이나 순서를 자체적으로 보장하지 않는다.','핵심: TCP는 연결 지향·신뢰성, UDP는 비연결·보장 없음입니다.',16),
]
for cat,prompt,answer,e,page in essays:written(cat,'essay',prompt,answer,e,page)
assert not any(q['type']=='choice' for q in bank)
