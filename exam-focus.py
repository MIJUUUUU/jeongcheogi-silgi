# Evidence is the practical-date annotation in the user's publisher summary,
# never the adjacent dates prefixed with '필기'. Dates describe the topic,
# not a claim that these original prompts were actual exam questions.
pattern_evidence={
 'abstract-factory':(['2024.4'],39),
 'factory-method':(['2021.10'],39),
 'adapter':(['2025.4'],39),
 'bridge':(['2022.10'],40),
 'proxy':(['2025.7','2023.4'],40),
 'iterator':(['2024.7'],40),
 'observer':(['2022.10','2020.7'],41),
}
core_specs={
 'normalization':('정규화·함수 종속',['2024.4','2021.7'],22),
 'transaction':('트랜잭션 특성',['2021.7','2020.5'],26),
 'coupling':('결합도',['2025.4','2024.7','2021.10','2021.4'],36),
 'cohesion':('응집도',['2024.7','2021.7'],36),
 'sql-group':('GROUP BY·HAVING',['2024.7','2023.4','2020.11','2020.10'],61),
 'sql-aggregate':('SQL 집계·NULL',['2025.11','2023.4','2022.10','2021.4'],60),
 'sql-set':('SQL 집합 연산',['2023.10'],61),
 'sql-sort':('SQL 정렬',['2022.5','2021.7'],59),
 'sql-subquery':('SQL 하위 질의',['2024.10','2024.4','2022.7'],60),
}
for key,(dates,page) in pattern_evidence.items():
 meta=next(c for c in FOCUS_CONCEPTS if c['id']==key)
 core_specs['pattern-'+key]=(meta['name'],dates,page)

def apply_evidence(q,key):
 name,dates,page=core_specs[key]
 q['examEvidence']={'source':1,'page':page,'dates':dates,'topic':name,'kind':'교재 실기 출제 표기'}
 q['coreConcept']='exam-'+key
for q in bank:
 # Classification of every GoF pattern is not evidence that that pattern was
 # named in an actual practical question. Only name-identification variants qualify.
 if q.get('topic')=='pattern' and q.get('concept') in pattern_evidence and q.get('exercise')!='classification':
  apply_evidence(q,'pattern-'+q['concept'])
 if q['answer'] in ['제1정규형','제2정규형','제3정규형','BCNF']:apply_evidence(q,'normalization')
 if q['answer'] in ['원자성','일관성','격리성','지속성']:apply_evidence(q,'transaction')
 if q['answer'] in ['결합도','공통 결합도','내용 결합도','제어 결합도','스탬프 결합도']:apply_evidence(q,'coupling')
 if q['answer'] in ['응집도','기능적 응집도','순차적 응집도','통신적 응집도']:apply_evidence(q,'cohesion')
 sqltext=q['prompt']+' '+q['answer']
 if q['category']=='데이터베이스':
  if 'COUNT(' in sqltext or q['prompt'].startswith('T의 열 v에는'):apply_evidence(q,'sql-aggregate')
  if 'GROUP BY' in sqltext or q['answer']=='HAVING':apply_evidence(q,'sql-group')
  if 'UNION' in sqltext:apply_evidence(q,'sql-set')
  if 'ORDER BY' in sqltext or q['answer']=='DESC':apply_evidence(q,'sql-sort')
for key,(name,dates,page) in core_specs.items():
 FOCUS_CONCEPTS.append(dict(id='exam-'+key,topic='core',name=name,english='',group='실기 출제 표기 확인',summary='첨부한 시나공 실기 핵심요약에서 해당 주제의 실기 출제 표기를 확인했습니다.',contrast='교재 표기: '+', '.join(dates)+f' · PDF {page}쪽. 문제는 이 개념을 바탕으로 재구성한 변형이며 기출 원문이 아닙니다.'))
# More than name recall: distinct inference, result interpretation, and query filling.
new_core=[
('normalization','데이터베이스','short','R(학번, 학과코드, 학과명)의 기본키는 학번이다. 학번 → 학과코드, 학과코드 → 학과명이 성립한다. 학과명이 학번에 대해 갖는 함수 종속의 종류를 쓰시오.','이행 함수 종속',['이행 함수 종속','이행적 함수 종속','Transitive Dependency'],'학번 → 학과코드 → 학과명으로 다른 속성을 거쳐 종속됩니다.'),
('normalization','데이터베이스','short','수강(학번, 과목코드, 학생이름, 성적)의 기본키는 (학번, 과목코드)이다. 학생이름은 학번에만 종속된다. 제2정규형으로 만들 때 제거해야 할 함수 종속의 종류를 쓰시오.','부분 함수 종속',['부분 함수 종속','부분적 함수 종속','Partial Dependency'],'복합키 일부인 학번만으로 학생이름이 결정되므로 부분 함수 종속입니다.'),
('transaction','데이터베이스','short','계좌 이체에서 출금은 성공했지만 입금에 실패하여 출금도 취소했다. 이 처리가 보장하려는 트랜잭션 특성의 명칭을 쓰시오.','원자성',['원자성','Atomicity'],'이체의 모든 연산을 전부 성공시키거나 전부 취소하는 원자성입니다.'),
('coupling','소프트웨어','short','모듈 A가 정렬 방식을 나타내는 flag 값을 B에 전달하고, B는 flag에 따라 다른 내부 처리 경로를 선택한다. 두 모듈 사이 결합도의 종류를 쓰시오.','제어 결합도',['제어 결합도','Control Coupling'],'단순 데이터가 아니라 처리 흐름을 선택하는 제어 요소를 전달합니다.'),
('cohesion','소프트웨어','short','모듈의 1단계에서 만든 정제 데이터가 2단계 변환의 입력이 되고, 변환 결과가 3단계 저장의 입력이 된다. 이 모듈의 응집도 종류를 쓰시오.','순차적 응집도',['순차적 응집도','Sequential Cohesion'],'한 활동의 출력이 다음 활동의 입력으로 이어지는 것이 단서입니다.'),
('sql-group','데이터베이스','blank','Employee(dept, salary)에서 부서별 평균 급여가 3000 이상인 부서만 조회한다. 빈칸의 절을 쓰시오.\n\nSELECT dept, AVG(salary)\nFROM Employee\nGROUP BY dept\n(     ) AVG(salary) >= 3000;','HAVING',['HAVING'],'그룹화 이후 집계 결과에 조건을 적용하므로 HAVING입니다.'),
('sql-set','데이터베이스','output','A(x)는 [1, 1, 2], B(x)는 [2, 3]의 행을 가진다. 다음 쿼리의 결과 행 수를 순서대로 쓰시오.\n① SELECT x FROM A UNION SELECT x FROM B;\n② SELECT x FROM A UNION ALL SELECT x FROM B;','3, 5',['3, 5'],'UNION은 중복 제거 후 1, 2, 3의 3행, UNION ALL은 원래 행 3+2의 5행입니다.'),
('sql-subquery','데이터베이스','output','R(id, dept)는 (1,A), (2,B), (3,A), (4,C)이고 S(dept, enabled)는 (A,1), (B,0), (C,1)이다. 다음 SQL 결과의 id를 오름차순으로 쓰시오.\n\nSELECT id FROM R\nWHERE dept IN (SELECT dept FROM S WHERE enabled = 1)\nORDER BY id;','1, 3, 4',['1, 3, 4'],'하위 질의의 부서는 A, C이므로 해당하는 id는 1, 3, 4입니다.'),
]
for key,category,kind,prompt,answer,aliases,e in new_core:
 written(category,kind,prompt,answer,e,core_specs[key][2],1,aliases)
 apply_evidence(bank[-1],key)
# Deduplicate semantically identical architecture name recall variants. Keep
# the scenario version and migrate older wrong-note identifiers to it.
removed={}
for q in list(bank):
 if q.get('topic')=='architecture' and q.get('exercise')=='description':
  target=next((x for x in bank if x.get('concept')==q.get('concept') and x.get('exercise')=='scenario'),None)
  if target:removed[q['id']]=target['id']
for old,target in removed.items():migrations[old]=target
for old,target in list(migrations.items()):
 if target in removed:migrations[old]=removed[target]
bank[:]=[q for q in bank if q['id'] not in removed]
