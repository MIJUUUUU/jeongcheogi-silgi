const QUESTIONS = [
  {
    "id": "q1",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "개발 주기마다 위험을 분석하고, 개발과 고객 평가를 반복하는 생명 주기 모형은?",
    "answer": "나선형 모형",
    "aliases": [
      "나선형 모형",
      "나선형",
      "Spiral",
      "Spiral Model"
    ],
    "explanation": "나선형 모형은 계획 수립 → 위험 분석 → 개발 및 검증 → 고객 평가를 반복합니다.",
    "source": 2,
    "page": 5
  },
  {
    "id": "q2",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "짧은 개발 주기를 반복하며 요구사항 변화와 고객 피드백에 대응하는 개발 접근법은?",
    "answer": "애자일",
    "aliases": [
      "애자일",
      "Agile",
      "애자일 모형"
    ],
    "explanation": "애자일은 실행되는 소프트웨어, 협업, 변화에 대한 대응을 중시합니다.",
    "source": 2,
    "page": 5
  },
  {
    "id": "q3",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "각 단계를 순서대로 완료하고 승인한 뒤 다음 단계로 넘어가는 전통적 개발 모형은?",
    "answer": "폭포수 모형",
    "aliases": [
      "폭포수 모형",
      "폭포수",
      "Waterfall",
      "Waterfall Model"
    ],
    "explanation": "폭포수 모형은 단계별 산출물을 검토하고 순차적으로 개발합니다.",
    "source": 2,
    "page": 5
  },
  {
    "id": "q4",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "요구사항을 확인하기 위해 먼저 시제품을 만들어 사용자에게 보여주는 모형은?",
    "answer": "프로토타입 모형",
    "aliases": [
      "프로토타입 모형",
      "프로토타입",
      "Prototyping"
    ],
    "explanation": "프로토타입으로 요구를 구체화하고 사용자의 의견을 반영합니다.",
    "source": 2,
    "page": 5
  },
  {
    "id": "q5",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "프로젝트의 전체 업무를 수행 가능한 작은 작업 단위로 분해한 구조를 나타내는 약어는?",
    "answer": "WBS",
    "aliases": [
      "WBS",
      "Work Breakdown Structure",
      "작업 분해 구조"
    ],
    "explanation": "WBS는 Work Breakdown Structure입니다. 작업을 세분화하여 일정과 비용 산정에 활용합니다.",
    "source": 2,
    "page": 5
  },
  {
    "id": "q6",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "시간축 위에 막대 길이로 작업 기간과 시작·종료 시점을 보여주는 일정 도표는?",
    "answer": "간트 차트",
    "aliases": [
      "간트 차트",
      "Gantt",
      "Gantt Chart",
      "간트"
    ],
    "explanation": "간트 차트는 작업 일정을 수평 막대로 표시합니다.",
    "source": 2,
    "page": 5
  },
  {
    "id": "q7",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "요구사항 중 응답 시간, 보안 수준, 가용성처럼 품질과 제약을 다루는 유형은?",
    "answer": "비기능적 요구사항",
    "aliases": [
      "비기능적 요구사항",
      "비기능 요구사항",
      "비기능적"
    ],
    "explanation": "기능적 요구사항은 제공할 기능이고, 비기능적 요구사항은 성능·품질·제약 조건입니다.",
    "source": 2,
    "page": 5
  },
  {
    "id": "q8",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "자료의 이동과 처리 과정을 프로세스·자료 흐름·저장소·외부 개체로 표현하는 도구의 약어는?",
    "answer": "DFD",
    "aliases": [
      "DFD",
      "자료 흐름도",
      "데이터 흐름도",
      "Data Flow Diagram"
    ],
    "explanation": "DFD는 Data Flow Diagram이며 구조적 분석에 사용합니다.",
    "source": 2,
    "page": 5
  },
  {
    "id": "q9",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "자료 흐름도에 사용된 데이터의 의미와 구조를 상세하게 정의한 문서는?",
    "answer": "자료 사전",
    "aliases": [
      "자료 사전",
      "데이터 사전",
      "DD",
      "Data Dictionary"
    ],
    "explanation": "자료 사전은 DFD의 자료를 정의합니다. DD(Data Dictionary)라고도 합니다.",
    "source": 2,
    "page": 5
  },
  {
    "id": "q10",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "객체·동적·기능 모형으로 분석을 나누는 객체지향 분석 방법론은?",
    "answer": "럼바우",
    "aliases": [
      "럼바우",
      "Rumbaugh",
      "럼바우 방법론"
    ],
    "explanation": "럼바우 분석은 객체 모형, 동적 모형, 기능 모형으로 구성합니다.",
    "source": 2,
    "page": 6
  },
  {
    "id": "q11",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "하위 타입이 상위 타입을 대신 사용되어도 동작의 일관성이 유지되어야 한다는 SOLID 원칙의 약어는?",
    "answer": "LSP",
    "aliases": [
      "LSP",
      "리스코프 치환 원칙",
      "Liskov Substitution Principle"
    ],
    "explanation": "LSP는 리스코프 치환 원칙입니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q12",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "확장에는 열려 있고 기존 코드의 수정에는 닫혀 있어야 한다는 설계 원칙의 약어는?",
    "answer": "OCP",
    "aliases": [
      "OCP",
      "개방 폐쇄 원칙",
      "Open Closed Principle"
    ],
    "explanation": "OCP는 개방 폐쇄 원칙입니다. 확장할 때 기존 코드의 변경을 줄이는 설계를 추구합니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q13",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "한 모듈 내부 요소들이 하나의 목적을 위해 얼마나 밀접하게 연관되는지를 나타내는 개념은?",
    "answer": "응집도",
    "aliases": [
      "응집도",
      "Cohesion"
    ],
    "explanation": "모듈 내부의 관련성이 높을수록 응집도가 높습니다. 좋은 설계는 높은 응집도를 지향합니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q14",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "서로 다른 모듈 사이의 의존 정도를 나타내는 개념은?",
    "answer": "결합도",
    "aliases": [
      "결합도",
      "Coupling"
    ],
    "explanation": "모듈 간 의존성이 낮을수록 독립적인 수정과 재사용이 쉬워집니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q15",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "클래스에서 생성할 수 있는 인스턴스를 하나로 제한하는 생성 패턴은?",
    "answer": "싱글톤",
    "aliases": [
      "싱글톤",
      "Singleton",
      "싱글턴"
    ],
    "explanation": "Singleton은 하나의 인스턴스에 대한 공통 접근 지점을 제공합니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q16",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "호환되지 않는 인터페이스를 다른 인터페이스로 변환해 함께 사용할 수 있게 하는 패턴은?",
    "answer": "어댑터",
    "aliases": [
      "어댑터",
      "Adapter"
    ],
    "explanation": "Adapter는 기존 인터페이스를 클라이언트가 기대하는 인터페이스로 변환합니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q17",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "객체 상태가 바뀌면 등록된 관찰자에게 변경 사실을 알리는 패턴은?",
    "answer": "옵서버",
    "aliases": [
      "옵서버",
      "Observer",
      "관찰자 패턴"
    ],
    "explanation": "Observer는 일대다 의존 관계에서 상태 변화를 구독자에게 알립니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q18",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "내부 소스코드 구조를 기준으로 경로와 조건을 검사하는 테스트 방식은?",
    "answer": "화이트박스 테스트",
    "aliases": [
      "화이트박스 테스트",
      "화이트박스",
      "White Box",
      "White Box Testing"
    ],
    "explanation": "화이트박스 테스트는 프로그램의 내부 구조를 알고 수행합니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q19",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "프로그램 내부 구조 대신 입력과 출력 및 명세에 초점을 맞추는 테스트 방식은?",
    "answer": "블랙박스 테스트",
    "aliases": [
      "블랙박스 테스트",
      "블랙박스",
      "Black Box",
      "Black Box Testing"
    ],
    "explanation": "블랙박스 테스트에는 동등 분할, 경계값 분석 등이 있습니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q20",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "변경한 코드가 기존 기능에 부작용을 일으키지 않았는지 확인하는 테스트는?",
    "answer": "회귀 테스트",
    "aliases": [
      "회귀 테스트",
      "Regression Testing",
      "회귀"
    ],
    "explanation": "수정 후 기존 테스트를 다시 수행해 새로운 결함의 유입 여부를 확인합니다.",
    "source": 2,
    "page": 9
  },
  {
    "id": "q21",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "하향식 통합 테스트에서 아직 구현되지 않은 하위 모듈을 대신하는 모듈은?",
    "answer": "스텁",
    "aliases": [
      "스텁",
      "Stub"
    ],
    "explanation": "스텁은 하위 모듈을, 드라이버는 상위 호출 모듈을 대체합니다.",
    "source": 2,
    "page": 9
  },
  {
    "id": "q22",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "상향식 통합 테스트에서 테스트할 모듈을 호출하는 상위 모듈의 대역은?",
    "answer": "드라이버",
    "aliases": [
      "드라이버",
      "Driver"
    ],
    "explanation": "드라이버는 입력을 전달하고 테스트 대상의 실행을 제어합니다.",
    "source": 2,
    "page": 9
  },
  {
    "id": "q23",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "트랜잭션의 작업이 전부 반영되거나 전부 취소되어야 한다는 특성은?",
    "answer": "원자성",
    "aliases": [
      "원자성",
      "Atomicity"
    ],
    "explanation": "Atomicity는 All or Nothing을 의미합니다.",
    "source": 2,
    "page": 10
  },
  {
    "id": "q24",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "완료된 트랜잭션의 결과가 장애 이후에도 보존되어야 한다는 특성은?",
    "answer": "지속성",
    "aliases": [
      "지속성",
      "영속성",
      "Durability"
    ],
    "explanation": "Durability는 성공적으로 커밋된 결과의 영속적 보존을 의미합니다.",
    "source": 2,
    "page": 10
  },
  {
    "id": "q25",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "동시에 실행되는 트랜잭션들이 서로의 중간 연산에 영향을 주지 않아야 한다는 특성은?",
    "answer": "격리성",
    "aliases": [
      "격리성",
      "독립성",
      "Isolation"
    ],
    "explanation": "Isolation은 동시 실행되는 트랜잭션 사이의 간섭을 제한합니다.",
    "source": 2,
    "page": 10
  },
  {
    "id": "q26",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "트랜잭션 완료 후에도 데이터베이스의 제약 조건이 유지되어야 한다는 특성은?",
    "answer": "일관성",
    "aliases": [
      "일관성",
      "Consistency"
    ],
    "explanation": "Consistency는 트랜잭션 전후에 데이터베이스의 일관된 상태를 보장합니다.",
    "source": 2,
    "page": 10
  },
  {
    "id": "q27",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "릴레이션에 포함된 튜플의 수를 뜻하는 용어는?",
    "answer": "카디널리티",
    "aliases": [
      "카디널리티",
      "Cardinality"
    ],
    "explanation": "카디널리티는 행의 수입니다. 차수(Degree)는 속성, 즉 열의 수입니다.",
    "source": 2,
    "page": 10
  },
  {
    "id": "q28",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "속성이 가질 수 있는 허용된 값의 집합을 무엇이라고 하는가?",
    "answer": "도메인",
    "aliases": [
      "도메인",
      "Domain"
    ],
    "explanation": "도메인은 속성에 들어갈 수 있는 값의 범위를 정의합니다.",
    "source": 2,
    "page": 10
  },
  {
    "id": "q29",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "모든 속성이 원자값만 갖도록 하는 정규형은?",
    "answer": "제1정규형",
    "aliases": [
      "제1정규형",
      "1NF",
      "제1 정규형",
      "1정규형"
    ],
    "explanation": "제1정규형은 반복 그룹을 제거하고 속성을 원자값으로 구성합니다.",
    "source": 2,
    "page": 11
  },
  {
    "id": "q30",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "제1정규형에서 기본키에 대한 부분 함수 종속을 제거하면 어떤 정규형인가?",
    "answer": "제2정규형",
    "aliases": [
      "제2정규형",
      "2NF",
      "제2 정규형",
      "2정규형"
    ],
    "explanation": "제2정규형은 기본키 전체에 완전 함수 종속되도록 합니다.",
    "source": 2,
    "page": 11
  },
  {
    "id": "q31",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "제2정규형에서 이행 함수 종속을 제거하면 어떤 정규형인가?",
    "answer": "제3정규형",
    "aliases": [
      "제3정규형",
      "3NF",
      "제3 정규형",
      "3정규형"
    ],
    "explanation": "키가 아닌 속성이 다른 비키 속성을 통해 종속되는 관계를 제거합니다.",
    "source": 2,
    "page": 11
  },
  {
    "id": "q32",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "모든 결정자가 후보키인 정규형의 약어는?",
    "answer": "BCNF",
    "aliases": [
      "BCNF",
      "보이스 코드 정규형",
      "보이스코드 정규형"
    ],
    "explanation": "보이스-코드 정규형(Boyce-Codd Normal Form)은 모든 결정자가 후보키인 정규형입니다.",
    "source": 2,
    "page": 11
  },
  {
    "id": "q33",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "SQL 조회 결과에서 중복 행을 제거하는 키워드는?",
    "answer": "DISTINCT",
    "aliases": [
      "DISTINCT"
    ],
    "explanation": "SELECT DISTINCT는 선택한 열들의 조합이 중복된 결과를 제거합니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q34",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "GROUP BY로 만든 그룹에 조건을 적용하는 SQL 절은?",
    "answer": "HAVING",
    "aliases": [
      "HAVING"
    ],
    "explanation": "WHERE는 그룹화 전 행을, HAVING은 그룹화 후 그룹을 필터링합니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q35",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "트랜잭션의 변경 사항을 확정하는 SQL 명령은?",
    "answer": "COMMIT",
    "aliases": [
      "COMMIT"
    ],
    "explanation": "COMMIT은 현재 트랜잭션의 변경을 확정하고, ROLLBACK은 취소합니다.",
    "source": 2,
    "page": 22
  },
  {
    "id": "q36",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "다른 테이블의 키를 참조해 릴레이션 사이의 관계를 유지하는 키는?",
    "answer": "외래키",
    "aliases": [
      "외래키",
      "Foreign Key",
      "FK"
    ],
    "explanation": "외래키는 참조 무결성을 유지하는 데 사용됩니다.",
    "source": 2,
    "page": 10
  },
  {
    "id": "q37",
    "category": "운영체제",
    "type": "short",
    "prompt": "먼저 입력한 데이터가 먼저 나오는 자료구조는?",
    "answer": "큐",
    "aliases": [
      "큐",
      "Queue"
    ],
    "explanation": "Queue는 FIFO 방식입니다. 스택은 LIFO 방식입니다.",
    "source": 2,
    "page": 12
  },
  {
    "id": "q38",
    "category": "운영체제",
    "type": "short",
    "prompt": "가장 나중에 저장한 데이터를 먼저 꺼내는 자료구조는?",
    "answer": "스택",
    "aliases": [
      "스택",
      "Stack"
    ],
    "explanation": "Stack은 LIFO 방식이며 삽입과 삭제가 한쪽 끝에서 이루어집니다.",
    "source": 2,
    "page": 12
  },
  {
    "id": "q39",
    "category": "운영체제",
    "type": "short",
    "prompt": "가장 오래 전에 적재된 페이지를 먼저 교체하는 알고리즘의 약어는?",
    "answer": "FIFO",
    "aliases": [
      "FIFO"
    ],
    "explanation": "적재 순서를 기준으로 교체합니다. 오래 전에 참조된 페이지를 고르는 LRU와 구분하세요.",
    "source": 2,
    "page": 13
  },
  {
    "id": "q40",
    "category": "운영체제",
    "type": "short",
    "prompt": "가장 오랫동안 사용하지 않은 페이지를 먼저 교체하는 알고리즘은?",
    "answer": "LRU",
    "aliases": [
      "LRU",
      "Least Recently Used"
    ],
    "explanation": "Least Recently Used는 마지막 참조 시점이 가장 오래된 페이지를 교체합니다.",
    "source": 2,
    "page": 13
  },
  {
    "id": "q41",
    "category": "운영체제",
    "type": "short",
    "prompt": "CPU 처리보다 페이지 교체에 시간을 많이 쓰며 성능이 급격히 떨어지는 현상은?",
    "answer": "스래싱",
    "aliases": [
      "스래싱",
      "스레싱",
      "Thrashing"
    ],
    "explanation": "프레임 부족으로 페이지 부재가 잦아지면 스래싱이 발생할 수 있습니다.",
    "source": 2,
    "page": 13
  },
  {
    "id": "q42",
    "category": "운영체제",
    "type": "short",
    "prompt": "프로세스들끼리 서로가 가진 자원을 기다려 진행할 수 없는 상태는?",
    "answer": "교착 상태",
    "aliases": [
      "교착 상태",
      "교착상태",
      "Deadlock",
      "데드락"
    ],
    "explanation": "교착 상태의 필요 조건은 상호 배제, 점유와 대기, 비선점, 순환 대기입니다.",
    "source": 2,
    "page": 14
  },
  {
    "id": "q43",
    "category": "운영체제",
    "type": "short",
    "prompt": "일정 시간 할당량만큼 CPU를 제공하고 준비 큐의 다음 프로세스로 넘기는 선점 스케줄링은?",
    "answer": "라운드 로빈",
    "aliases": [
      "라운드 로빈",
      "Round Robin",
      "RR"
    ],
    "explanation": "Round Robin은 시간 할당량(Time Quantum)을 사용하는 선점 스케줄링입니다.",
    "source": 2,
    "page": 27
  },
  {
    "id": "q44",
    "category": "운영체제",
    "type": "short",
    "prompt": "실행 시간이 짧은 작업부터 처리하는 비선점 CPU 스케줄링의 약어는?",
    "answer": "SJF",
    "aliases": [
      "SJF",
      "Shortest Job First"
    ],
    "explanation": "Shortest Job First는 짧은 작업을 우선 처리하며 긴 작업에 기아 현상이 생길 수 있습니다.",
    "source": 2,
    "page": 27
  },
  {
    "id": "q45",
    "category": "운영체제",
    "type": "short",
    "prompt": "프로그램을 동일한 크기의 페이지로 나누어 메모리에 배치하는 관리 기법은?",
    "answer": "페이징",
    "aliases": [
      "페이징",
      "Paging"
    ],
    "explanation": "페이징은 고정 크기 페이지와 프레임을 사용하며 내부 단편화가 발생할 수 있습니다.",
    "source": 2,
    "page": 13
  },
  {
    "id": "q46",
    "category": "네트워크",
    "type": "short",
    "prompt": "OSI 계층 중 IP 주소를 이용해 패킷의 경로를 결정하는 계층은?",
    "answer": "네트워크 계층",
    "aliases": [
      "네트워크 계층",
      "네트워크",
      "Network",
      "Network Layer",
      "3계층"
    ],
    "explanation": "네트워크 계층은 3계층이며 라우팅과 논리 주소를 다룹니다.",
    "source": 2,
    "page": 16
  },
  {
    "id": "q47",
    "category": "네트워크",
    "type": "short",
    "prompt": "OSI 계층 중 TCP와 UDP가 속하는 계층은?",
    "answer": "전송 계층",
    "aliases": [
      "전송 계층",
      "전송",
      "Transport",
      "Transport Layer",
      "4계층"
    ],
    "explanation": "전송 계층은 4계층으로 종단 간 전송을 담당합니다.",
    "source": 2,
    "page": 16
  },
  {
    "id": "q48",
    "category": "네트워크",
    "type": "short",
    "prompt": "연결을 설정하고 순서 제어와 재전송으로 신뢰성을 제공하는 전송 프로토콜은?",
    "answer": "TCP",
    "aliases": [
      "TCP"
    ],
    "explanation": "TCP는 연결 지향 프로토콜이며 신뢰성 있는 전송을 제공합니다.",
    "source": 2,
    "page": 16
  },
  {
    "id": "q49",
    "category": "네트워크",
    "type": "short",
    "prompt": "연결 설정 없이 데이터그램을 전송하며 자체 재전송을 보장하지 않는 전송 프로토콜은?",
    "answer": "UDP",
    "aliases": [
      "UDP"
    ],
    "explanation": "UDP는 비연결형 프로토콜이며 지연을 줄일 수 있지만 전달을 보장하지 않습니다.",
    "source": 2,
    "page": 16
  },
  {
    "id": "q50",
    "category": "네트워크",
    "type": "short",
    "prompt": "IPv4 주소를 같은 네트워크의 MAC 주소로 대응시키는 프로토콜은?",
    "answer": "ARP",
    "aliases": [
      "ARP",
      "Address Resolution Protocol"
    ],
    "explanation": "ARP는 Address Resolution Protocol입니다.",
    "source": 2,
    "page": 17
  },
  {
    "id": "q51",
    "category": "네트워크",
    "type": "short",
    "prompt": "도메인 이름을 IP 주소로 변환하는 시스템의 약어는?",
    "answer": "DNS",
    "aliases": [
      "DNS",
      "Domain Name System"
    ],
    "explanation": "DNS는 Domain Name System이며 도메인 이름 해석에 사용됩니다.",
    "source": 2,
    "page": 17
  },
  {
    "id": "q52",
    "category": "보안",
    "type": "short",
    "prompt": "웹 페이지에 악성 스크립트를 주입해 방문자의 브라우저에서 실행시키는 공격의 약어는?",
    "answer": "XSS",
    "aliases": [
      "XSS",
      "Cross Site Scripting",
      "크로스 사이트 스크립팅"
    ],
    "explanation": "Cross Site Scripting은 출력 시 적절한 이스케이프 등으로 예방합니다.",
    "source": 2,
    "page": 19
  },
  {
    "id": "q53",
    "category": "보안",
    "type": "short",
    "prompt": "사용자 입력을 조작해 데이터베이스 쿼리의 의미를 바꾸는 공격은?",
    "answer": "SQL Injection",
    "aliases": [
      "SQL Injection",
      "SQL 삽입",
      "SQL 인젝션",
      "SQL 주입"
    ],
    "explanation": "매개변수화된 쿼리를 사용해 입력 데이터와 SQL 명령을 분리해야 합니다.",
    "source": 2,
    "page": 19
  },
  {
    "id": "q54",
    "category": "보안",
    "type": "short",
    "prompt": "여러 장치에서 동시에 트래픽을 보내 서비스를 마비시키는 분산 서비스 거부 공격의 약어는?",
    "answer": "DDoS",
    "aliases": [
      "DDoS"
    ],
    "explanation": "DDoS는 여러 공격원을 사용하여 대상 서비스의 가용성을 침해합니다.",
    "source": 2,
    "page": 19
  },
  {
    "id": "q55",
    "category": "보안",
    "type": "short",
    "prompt": "암호화와 복호화에 동일한 키를 쓰는 방식은?",
    "answer": "대칭키 암호화",
    "aliases": [
      "대칭키 암호화",
      "대칭키",
      "대칭키 암호"
    ],
    "explanation": "대칭키 방식은 키가 같고, 비대칭키 방식은 공개키와 개인키 쌍을 사용합니다.",
    "source": 2,
    "page": 18
  },
  {
    "id": "q56",
    "category": "보안",
    "type": "short",
    "prompt": "공개키와 개인키 한 쌍을 사용하며 큰 수의 소인수분해 어려움에 기반한 암호 알고리즘은?",
    "answer": "RSA",
    "aliases": [
      "RSA"
    ],
    "explanation": "RSA는 대표적인 비대칭키 암호 알고리즘입니다.",
    "source": 2,
    "page": 18
  },
  {
    "id": "q57",
    "category": "보안",
    "type": "short",
    "prompt": "임의 길이의 입력을 고정 길이의 값으로 변환하는 일방향 함수는?",
    "answer": "해시 함수",
    "aliases": [
      "해시 함수",
      "해시",
      "Hash",
      "Hash Function"
    ],
    "explanation": "해시 함수는 메시지 무결성 검증 등에 활용합니다. 암호화와 달리 복호화하지 않습니다.",
    "source": 2,
    "page": 18
  },
  {
    "id": "q58",
    "category": "보안",
    "type": "short",
    "prompt": "허가된 사용자만 정보에 접근할 수 있어야 한다는 보안의 기본 속성은?",
    "answer": "기밀성",
    "aliases": [
      "기밀성",
      "Confidentiality"
    ],
    "explanation": "기밀성은 비인가 접근으로부터 정보를 보호합니다.",
    "source": 2,
    "page": 18
  },
  {
    "id": "q59",
    "category": "보안",
    "type": "short",
    "prompt": "데이터가 허가 없이 수정되거나 훼손되지 않아야 한다는 보안 속성은?",
    "answer": "무결성",
    "aliases": [
      "무결성",
      "Integrity"
    ],
    "explanation": "무결성은 데이터의 정확성과 변조 방지를 의미합니다.",
    "source": 2,
    "page": 18
  },
  {
    "id": "q60",
    "category": "보안",
    "type": "short",
    "prompt": "필요한 시점에 인가된 사용자가 서비스를 이용할 수 있어야 한다는 속성은?",
    "answer": "가용성",
    "aliases": [
      "가용성",
      "Availability"
    ],
    "explanation": "가용성은 시스템과 정보에 대한 정상적인 이용을 보장합니다.",
    "source": 2,
    "page": 18
  },
  {
    "id": "q61",
    "category": "계산",
    "type": "short",
    "prompt": "세 속성 A, B, C의 도메인 원소 수가 각각 2, 3, 5개다. 추가 제약이 없다면 가능한 튜플의 최대 수는?",
    "answer": "30",
    "aliases": [
      "30"
    ],
    "explanation": "각 속성의 가능한 값을 곱합니다. 2 × 3 × 5 = 30.",
    "source": 3,
    "page": 1
  },
  {
    "id": "q62",
    "category": "계산",
    "type": "short",
    "prompt": "세 속성 A, B, C의 도메인 원소 수가 각각 4, 2, 6개다. 추가 제약이 없다면 가능한 튜플의 최대 수는?",
    "answer": "48",
    "aliases": [
      "48"
    ],
    "explanation": "각 속성의 가능한 값을 곱합니다. 4 × 2 × 6 = 48.",
    "source": 3,
    "page": 1
  },
  {
    "id": "q63",
    "category": "계산",
    "type": "short",
    "prompt": "세 속성 A, B, C의 도메인 원소 수가 각각 3, 5, 4개다. 추가 제약이 없다면 가능한 튜플의 최대 수는?",
    "answer": "60",
    "aliases": [
      "60"
    ],
    "explanation": "각 속성의 가능한 값을 곱합니다. 3 × 5 × 4 = 60.",
    "source": 3,
    "page": 1
  },
  {
    "id": "q64",
    "category": "계산",
    "type": "short",
    "prompt": "세 속성 A, B, C의 도메인 원소 수가 각각 6, 2, 3개다. 추가 제약이 없다면 가능한 튜플의 최대 수는?",
    "answer": "36",
    "aliases": [
      "36"
    ],
    "explanation": "각 속성의 가능한 값을 곱합니다. 6 × 2 × 3 = 36.",
    "source": 3,
    "page": 1
  },
  {
    "id": "q65",
    "category": "계산",
    "type": "short",
    "prompt": "세 속성 A, B, C의 도메인 원소 수가 각각 4, 4, 3개다. 추가 제약이 없다면 가능한 튜플의 최대 수는?",
    "answer": "48",
    "aliases": [
      "48"
    ],
    "explanation": "각 속성의 가능한 값을 곱합니다. 4 × 4 × 3 = 48.",
    "source": 3,
    "page": 1
  },
  {
    "id": "q66",
    "category": "계산",
    "type": "short",
    "prompt": "일반적인 IPv4 서브넷 /24에서 네트워크 주소와 브로드캐스트 주소를 제외한 사용 가능한 호스트 주소 수는?",
    "answer": "254",
    "aliases": [
      "254"
    ],
    "explanation": "호스트 비트는 32 − 24 = 8비트입니다. 2^8 − 2 = 254개입니다.",
    "source": 3,
    "page": 11
  },
  {
    "id": "q67",
    "category": "계산",
    "type": "short",
    "prompt": "일반적인 IPv4 서브넷 /25에서 네트워크 주소와 브로드캐스트 주소를 제외한 사용 가능한 호스트 주소 수는?",
    "answer": "126",
    "aliases": [
      "126"
    ],
    "explanation": "호스트 비트는 32 − 25 = 7비트입니다. 2^7 − 2 = 126개입니다.",
    "source": 3,
    "page": 11
  },
  {
    "id": "q68",
    "category": "계산",
    "type": "short",
    "prompt": "일반적인 IPv4 서브넷 /26에서 네트워크 주소와 브로드캐스트 주소를 제외한 사용 가능한 호스트 주소 수는?",
    "answer": "62",
    "aliases": [
      "62"
    ],
    "explanation": "호스트 비트는 32 − 26 = 6비트입니다. 2^6 − 2 = 62개입니다.",
    "source": 3,
    "page": 11
  },
  {
    "id": "q69",
    "category": "계산",
    "type": "short",
    "prompt": "일반적인 IPv4 서브넷 /27에서 네트워크 주소와 브로드캐스트 주소를 제외한 사용 가능한 호스트 주소 수는?",
    "answer": "30",
    "aliases": [
      "30"
    ],
    "explanation": "호스트 비트는 32 − 27 = 5비트입니다. 2^5 − 2 = 30개입니다.",
    "source": 3,
    "page": 11
  },
  {
    "id": "q70",
    "category": "계산",
    "type": "short",
    "prompt": "일반적인 IPv4 서브넷 /28에서 네트워크 주소와 브로드캐스트 주소를 제외한 사용 가능한 호스트 주소 수는?",
    "answer": "14",
    "aliases": [
      "14"
    ],
    "explanation": "호스트 비트는 32 − 28 = 4비트입니다. 2^4 − 2 = 14개입니다.",
    "source": 3,
    "page": 11
  },
  {
    "id": "q71",
    "category": "계산",
    "type": "short",
    "prompt": "일반적인 IPv4 서브넷 /29에서 네트워크 주소와 브로드캐스트 주소를 제외한 사용 가능한 호스트 주소 수는?",
    "answer": "6",
    "aliases": [
      "6"
    ],
    "explanation": "호스트 비트는 32 − 29 = 3비트입니다. 2^3 − 2 = 6개입니다.",
    "source": 3,
    "page": 11
  },
  {
    "id": "q72",
    "category": "계산",
    "type": "short",
    "prompt": "일반적인 IPv4 서브넷 /30에서 네트워크 주소와 브로드캐스트 주소를 제외한 사용 가능한 호스트 주소 수는?",
    "answer": "2",
    "aliases": [
      "2"
    ],
    "explanation": "호스트 비트는 32 − 30 = 2비트입니다. 2^2 − 2 = 2개입니다.",
    "source": 3,
    "page": 11
  },
  {
    "id": "q73",
    "category": "계산",
    "type": "short",
    "prompt": "7개 행과 4개 열을 가진 릴레이션의 카디널리티와 차수를 순서대로 쓰세요. (쉼표로 구분)",
    "answer": "7, 4",
    "aliases": [
      "7, 4"
    ],
    "explanation": "카디널리티는 튜플 수 7, 차수는 속성 수 4입니다.",
    "source": 3,
    "page": 1
  },
  {
    "id": "q74",
    "category": "계산",
    "type": "short",
    "prompt": "12개 행과 5개 열을 가진 릴레이션의 카디널리티와 차수를 순서대로 쓰세요. (쉼표로 구분)",
    "answer": "12, 5",
    "aliases": [
      "12, 5"
    ],
    "explanation": "카디널리티는 튜플 수 12, 차수는 속성 수 5입니다.",
    "source": 3,
    "page": 1
  },
  {
    "id": "q75",
    "category": "계산",
    "type": "short",
    "prompt": "3개 행과 8개 열을 가진 릴레이션의 카디널리티와 차수를 순서대로 쓰세요. (쉼표로 구분)",
    "answer": "3, 8",
    "aliases": [
      "3, 8"
    ],
    "explanation": "카디널리티는 튜플 수 3, 차수는 속성 수 8입니다.",
    "source": 3,
    "page": 1
  },
  {
    "id": "q76",
    "category": "계산",
    "type": "short",
    "prompt": "9개 행과 6개 열을 가진 릴레이션의 카디널리티와 차수를 순서대로 쓰세요. (쉼표로 구분)",
    "answer": "9, 6",
    "aliases": [
      "9, 6"
    ],
    "explanation": "카디널리티는 튜플 수 9, 차수는 속성 수 6입니다.",
    "source": 3,
    "page": 1
  },
  {
    "id": "q77",
    "category": "계산",
    "type": "short",
    "prompt": "15개 행과 3개 열을 가진 릴레이션의 카디널리티와 차수를 순서대로 쓰세요. (쉼표로 구분)",
    "answer": "15, 3",
    "aliases": [
      "15, 3"
    ],
    "explanation": "카디널리티는 튜플 수 15, 차수는 속성 수 3입니다.",
    "source": 3,
    "page": 1
  },
  {
    "id": "q78",
    "category": "계산",
    "type": "short",
    "prompt": "배열 7, 2, 9, 4, 1에 왼쪽부터 인접 원소를 비교하는 오름차순 버블 정렬을 1회전 수행한 결과는? (쉼표로 구분)",
    "answer": "2, 7, 4, 1, 9",
    "aliases": [
      "2, 7, 4, 1, 9"
    ],
    "explanation": "인접한 두 값을 비교해 큰 값을 오른쪽으로 보냅니다. 1회전 후 최댓값 9이 맨 오른쪽에 놓입니다.",
    "source": 3,
    "page": 2
  },
  {
    "id": "q79",
    "category": "계산",
    "type": "short",
    "prompt": "배열 8, 5, 3, 6, 2에 왼쪽부터 인접 원소를 비교하는 오름차순 버블 정렬을 1회전 수행한 결과는? (쉼표로 구분)",
    "answer": "5, 3, 6, 2, 8",
    "aliases": [
      "5, 3, 6, 2, 8"
    ],
    "explanation": "인접한 두 값을 비교해 큰 값을 오른쪽으로 보냅니다. 1회전 후 최댓값 8이 맨 오른쪽에 놓입니다.",
    "source": 3,
    "page": 2
  },
  {
    "id": "q80",
    "category": "계산",
    "type": "short",
    "prompt": "배열 4, 9, 1, 7, 3에 왼쪽부터 인접 원소를 비교하는 오름차순 버블 정렬을 1회전 수행한 결과는? (쉼표로 구분)",
    "answer": "4, 1, 7, 3, 9",
    "aliases": [
      "4, 1, 7, 3, 9"
    ],
    "explanation": "인접한 두 값을 비교해 큰 값을 오른쪽으로 보냅니다. 1회전 후 최댓값 9이 맨 오른쪽에 놓입니다.",
    "source": 3,
    "page": 2
  },
  {
    "id": "q81",
    "category": "계산",
    "type": "short",
    "prompt": "배열 6, 3, 8, 2, 5에 왼쪽부터 인접 원소를 비교하는 오름차순 버블 정렬을 1회전 수행한 결과는? (쉼표로 구분)",
    "answer": "3, 6, 2, 5, 8",
    "aliases": [
      "3, 6, 2, 5, 8"
    ],
    "explanation": "인접한 두 값을 비교해 큰 값을 오른쪽으로 보냅니다. 1회전 후 최댓값 8이 맨 오른쪽에 놓입니다.",
    "source": 3,
    "page": 2
  },
  {
    "id": "q82",
    "category": "계산",
    "type": "short",
    "prompt": "PERT에서 낙관 시간 6일, 최빈 시간 9일, 비관 시간 12일이다. 기대 소요 시간은 몇 일인가?",
    "answer": "9",
    "aliases": [
      "9"
    ],
    "explanation": "기대 시간 = (낙관 + 4 × 최빈 + 비관) ÷ 6 = (6 + 4 × 9 + 12) ÷ 6 = 9일.",
    "source": 2,
    "page": 5
  },
  {
    "id": "q83",
    "category": "계산",
    "type": "short",
    "prompt": "PERT에서 낙관 시간 3일, 최빈 시간 6일, 비관 시간 9일이다. 기대 소요 시간은 몇 일인가?",
    "answer": "6",
    "aliases": [
      "6"
    ],
    "explanation": "기대 시간 = (낙관 + 4 × 최빈 + 비관) ÷ 6 = (3 + 4 × 6 + 9) ÷ 6 = 6일.",
    "source": 2,
    "page": 5
  },
  {
    "id": "q84",
    "category": "계산",
    "type": "short",
    "prompt": "PERT에서 낙관 시간 2일, 최빈 시간 5일, 비관 시간 8일이다. 기대 소요 시간은 몇 일인가?",
    "answer": "5",
    "aliases": [
      "5"
    ],
    "explanation": "기대 시간 = (낙관 + 4 × 최빈 + 비관) ÷ 6 = (2 + 4 × 5 + 8) ÷ 6 = 5일.",
    "source": 2,
    "page": 5
  },
  {
    "id": "q85",
    "category": "계산",
    "type": "short",
    "prompt": "PERT에서 낙관 시간 4일, 최빈 시간 7일, 비관 시간 10일이다. 기대 소요 시간은 몇 일인가?",
    "answer": "7",
    "aliases": [
      "7"
    ],
    "explanation": "기대 시간 = (낙관 + 4 × 최빈 + 비관) ÷ 6 = (4 + 4 × 7 + 10) ÷ 6 = 7일.",
    "source": 2,
    "page": 5
  },
  {
    "id": "q86",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "애자일 개발 가치와 가장 거리가 먼 설명은?",
    "choices": [
      "고객과 자주 협업한다.",
      "실행되는 소프트웨어를 중요하게 여긴다.",
      "변화가 생기면 개발 계획을 조정한다.",
      "초기 계획을 모든 변화보다 우선한다."
    ],
    "answer": "초기 계획을 모든 변화보다 우선한다.",
    "explanation": "애자일은 계획 준수보다 변화에 대한 대응에 더 큰 가치를 둡니다.",
    "source": 4,
    "page": 1
  },
  {
    "id": "q87",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "다음 중 UML의 정적 구조를 표현하는 다이어그램은?",
    "choices": [
      "시퀀스 다이어그램",
      "활동 다이어그램",
      "클래스 다이어그램",
      "상태 다이어그램"
    ],
    "answer": "클래스 다이어그램",
    "explanation": "클래스 다이어그램은 클래스의 속성, 연산, 클래스 사이 관계를 정적으로 표현합니다.",
    "source": 2,
    "page": 6
  },
  {
    "id": "q88",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "XP의 핵심 가치에 포함되지 않는 것은?",
    "choices": [
      "존중",
      "단순성",
      "피드백",
      "경쟁"
    ],
    "answer": "경쟁",
    "explanation": "XP의 다섯 가치는 의사소통, 단순성, 용기, 피드백, 존중입니다.",
    "source": 2,
    "page": 5
  },
  {
    "id": "q89",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "모듈 설계의 일반적인 목표로 가장 적절한 것은?",
    "choices": [
      "높은 결합도와 낮은 응집도",
      "낮은 결합도와 높은 응집도",
      "결합도와 응집도 모두 최대화",
      "결합도와 응집도 모두 최소화"
    ],
    "answer": "낮은 결합도와 높은 응집도",
    "explanation": "외부 의존성은 줄이고 내부 기능의 관련성은 높여야 유지보수가 쉬워집니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q90",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "블랙박스 테스트 기법에 해당하는 것은?",
    "choices": [
      "기초 경로 검사",
      "문장 커버리지 검사",
      "조건 커버리지 검사",
      "경계값 분석"
    ],
    "answer": "경계값 분석",
    "explanation": "경계값 분석은 입력 범위의 경계와 그 주변을 검사하는 블랙박스 기법입니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q91",
    "category": "데이터베이스",
    "type": "choice",
    "prompt": "SQL 명령 중 데이터 제어어(DCL)에 속하는 것은?",
    "choices": [
      "INSERT",
      "SELECT",
      "GRANT",
      "CREATE"
    ],
    "answer": "GRANT",
    "explanation": "GRANT는 권한을 부여하는 DCL입니다. INSERT와 SELECT는 DML, CREATE는 DDL입니다.",
    "source": 2,
    "page": 22
  },
  {
    "id": "q92",
    "category": "데이터베이스",
    "type": "choice",
    "prompt": "WHERE와 HAVING에 대한 올바른 설명은?",
    "choices": [
      "WHERE는 그룹에만 적용한다.",
      "HAVING은 GROUP BY 이전 행에 적용한다.",
      "WHERE는 행을, HAVING은 그룹을 필터링한다.",
      "두 절은 항상 서로 대체할 수 있다."
    ],
    "answer": "WHERE는 행을, HAVING은 그룹을 필터링한다.",
    "explanation": "WHERE로 행을 먼저 고른 다음 GROUP BY로 그룹화하고 HAVING으로 그룹을 제한합니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q93",
    "category": "운영체제",
    "type": "choice",
    "prompt": "교착 상태의 필요 조건에 포함되지 않는 것은?",
    "choices": [
      "상호 배제",
      "점유와 대기",
      "순환 대기",
      "선점 가능"
    ],
    "answer": "선점 가능",
    "explanation": "필요 조건은 비선점입니다. 선점이 가능하면 교착 상태를 해소할 수 있습니다.",
    "source": 2,
    "page": 14
  },
  {
    "id": "q94",
    "category": "네트워크",
    "type": "choice",
    "prompt": "OSI 7계층을 아래에서 위로 나열한 순서는?",
    "choices": [
      "물리 → 데이터 링크 → 네트워크 → 전송 → 세션 → 표현 → 응용",
      "물리 → 네트워크 → 데이터 링크 → 전송 → 표현 → 세션 → 응용",
      "데이터 링크 → 물리 → 네트워크 → 세션 → 전송 → 표현 → 응용",
      "물리 → 데이터 링크 → 전송 → 네트워크 → 세션 → 응용 → 표현"
    ],
    "answer": "물리 → 데이터 링크 → 네트워크 → 전송 → 세션 → 표현 → 응용",
    "explanation": "1계층부터 물리, 데이터 링크, 네트워크, 전송, 세션, 표현, 응용입니다.",
    "source": 2,
    "page": 16
  },
  {
    "id": "q95",
    "category": "보안",
    "type": "choice",
    "prompt": "암호화에 쓰는 키와 복호화에 쓰는 키가 동일한 알고리즘은?",
    "choices": [
      "RSA",
      "AES",
      "ECC",
      "ElGamal"
    ],
    "answer": "AES",
    "explanation": "AES는 대칭키 알고리즘입니다. 나머지는 비대칭키 방식에 해당합니다.",
    "source": 2,
    "page": 18
  },
  {
    "id": "q96",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 Python 코드의 출력 결과는?\n\na = [2, 4, 6, 8, 10]\nprint(a[1:4:2])",
    "answer": "[4, 8]",
    "aliases": [
      "[4, 8]"
    ],
    "explanation": "인덱스 1부터 4 미만까지 2씩 이동하여 인덱스 1과 3의 원소를 선택합니다.",
    "source": 1,
    "page": 97
  },
  {
    "id": "q97",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 Python 코드의 출력 결과는?\n\ns = \"DATABASE\"\nprint(s[2:6])",
    "answer": "TABA",
    "aliases": [
      "TABA"
    ],
    "explanation": "슬라이스의 시작 인덱스는 포함하고 끝 인덱스는 제외합니다. 인덱스 2, 3, 4, 5의 문자는 TABA입니다.",
    "source": 1,
    "page": 97
  },
  {
    "id": "q98",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 Python 코드의 출력 결과는?\n\nf = lambda x, y: x * 2 + y\nprint(f(3, 4))",
    "answer": "10",
    "aliases": [
      "10"
    ],
    "explanation": "람다 함수에 x=3, y=4를 전달하면 3 × 2 + 4 = 10입니다.",
    "source": 1,
    "page": 94
  },
  {
    "id": "q99",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 Python 코드의 출력 결과는?\n\na = [1, 3]\na.append(5)\na.remove(1)\nprint(a)",
    "answer": "[3, 5]",
    "aliases": [
      "[3, 5]"
    ],
    "explanation": "append는 마지막에 원소를 추가하고 remove는 지정한 값의 첫 원소를 삭제합니다.",
    "source": 1,
    "page": 92
  },
  {
    "id": "q100",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 Python 코드의 출력 결과는?\n\na = {1, 2, 2, 3}\nprint(len(a))",
    "answer": "3",
    "aliases": [
      "3"
    ],
    "explanation": "세트는 중복 원소를 저장하지 않으므로 원소는 1, 2, 3의 세 개입니다.",
    "source": 1,
    "page": 93
  },
  {
    "id": "q101",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 C 코드의 출력 결과는?\n\n#include <stdio.h>\nint main(void) {\n    int a = 8;\n    int *p = &a;\n    *p += 3;\n    printf(\"%d\", a);\n    return 0;\n}",
    "answer": "11",
    "aliases": [
      "11"
    ],
    "explanation": "p는 a의 주소를 가리킵니다. *p를 변경하면 a의 값도 바뀌므로 8 + 3 = 11입니다.",
    "source": 1,
    "page": 77
  },
  {
    "id": "q102",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 C 코드의 출력 결과는?\n\n#include <stdio.h>\nint f(int n) {\n    if (n <= 1) return 1;\n    return n * f(n - 1);\n}\nint main(void) {\n    printf(\"%d\", f(4));\n    return 0;\n}",
    "answer": "24",
    "aliases": [
      "24"
    ],
    "explanation": "재귀 호출로 4 × 3 × 2 × 1을 계산합니다. 기저 조건 n <= 1에서 재귀 호출을 종료합니다.",
    "source": 1,
    "page": 82
  },
  {
    "id": "q103",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 C 코드의 출력 결과는?\n\n#include <stdio.h>\nint main(void) {\n    int a[] = {3, 6, 9};\n    printf(\"%d\", a[1]);\n    return 0;\n}",
    "answer": "6",
    "aliases": [
      "6"
    ],
    "explanation": "배열 인덱스는 0부터 시작하므로 a[1]은 두 번째 원소 6입니다.",
    "source": 1,
    "page": 72
  },
  {
    "id": "q104",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "사용자가 시스템과 상호작용하며 수행하는 목표를 액터와 사용 사례로 표현하는 UML 다이어그램은?",
    "answer": "유스케이스 다이어그램",
    "aliases": [
      "유스케이스 다이어그램",
      "Use Case Diagram",
      "유스케이스"
    ],
    "explanation": "액터가 시스템을 이용하는 기능을 사용자 관점에서 보여줍니다.",
    "source": 2,
    "page": 6
  },
  {
    "id": "q105",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "객체 사이의 메시지를 시간 순서에 따라 표현하는 UML 다이어그램은?",
    "answer": "시퀀스 다이어그램",
    "aliases": [
      "시퀀스 다이어그램",
      "Sequence Diagram",
      "순차 다이어그램",
      "시퀀스"
    ],
    "explanation": "생명선과 메시지로 상호작용의 순서를 표현합니다.",
    "source": 2,
    "page": 6
  },
  {
    "id": "q106",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "객체가 이벤트에 따라 어떤 상태로 전이하는지 표현하는 UML 다이어그램은?",
    "answer": "상태 다이어그램",
    "aliases": [
      "상태 다이어그램",
      "State Diagram",
      "상태"
    ],
    "explanation": "상태와 이벤트에 따른 전이를 표현하는 행위 다이어그램입니다.",
    "source": 2,
    "page": 6
  },
  {
    "id": "q107",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "조건과 분기를 포함해 작업의 처리 흐름을 표현하는 UML 다이어그램은?",
    "answer": "활동 다이어그램",
    "aliases": [
      "활동 다이어그램",
      "Activity Diagram",
      "활동"
    ],
    "explanation": "액티비티의 실행 흐름과 분기, 병렬 처리를 나타냅니다.",
    "source": 2,
    "page": 6
  },
  {
    "id": "q108",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "소프트웨어 구성 요소가 어떤 물리적 노드에 배치되는지 보여주는 UML 다이어그램은?",
    "answer": "배치 다이어그램",
    "aliases": [
      "배치 다이어그램",
      "Deployment Diagram",
      "배치"
    ],
    "explanation": "서버 등 물리적 노드와 그 노드에 배치된 요소를 표현합니다.",
    "source": 2,
    "page": 6
  },
  {
    "id": "q109",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "화면의 레이아웃과 요소 위치를 기획 초기에 선과 상자로 나타내는 설계 산출물은?",
    "answer": "와이어프레임",
    "aliases": [
      "와이어프레임",
      "Wireframe"
    ],
    "explanation": "상세한 디자인 이전에 화면 구조를 잡는 데 사용합니다.",
    "source": 2,
    "page": 6
  },
  {
    "id": "q110",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "실제 화면처럼 보이지만 상호작용 기능은 없는 정적인 화면 모형은?",
    "answer": "목업",
    "aliases": [
      "목업",
      "Mockup",
      "Mock-up"
    ],
    "explanation": "목업은 화면의 시각적 모습을 확인하는 정적인 모형입니다.",
    "source": 2,
    "page": 6
  },
  {
    "id": "q111",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "데이터·화면·입력 제어를 Model, View, Controller로 나누는 아키텍처의 약어는?",
    "answer": "MVC",
    "aliases": [
      "MVC",
      "Model View Controller"
    ],
    "explanation": "Model은 데이터와 핵심 로직, View는 표시, Controller는 입력 처리를 맡습니다.",
    "source": 2,
    "page": 6
  },
  {
    "id": "q112",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "사용 사례를 중심으로 사용자와 외부 시스템의 상호작용을 분석하는 방법론의 제안자는?",
    "answer": "제이콥슨",
    "aliases": [
      "제이콥슨",
      "Jacobson"
    ],
    "explanation": "Jacobson 방법론은 유스케이스를 중시합니다.",
    "source": 2,
    "page": 6
  },
  {
    "id": "q113",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "데이터와 이를 처리하는 메서드를 하나로 묶고 내부 구현의 접근을 제한하는 객체지향 특성은?",
    "answer": "캡슐화",
    "aliases": [
      "캡슐화",
      "Encapsulation"
    ],
    "explanation": "관련 데이터와 동작을 묶고 외부에 필요한 인터페이스를 제공합니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q114",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "상위 클래스의 속성과 메서드를 하위 클래스에서 물려받는 객체지향 특성은?",
    "answer": "상속",
    "aliases": [
      "상속",
      "Inheritance"
    ],
    "explanation": "상속은 공통 기능을 재사용하고 상위 타입을 확장하는 데 사용됩니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q115",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "같은 메시지나 메서드 호출이 객체의 실제 타입에 따라 다르게 동작하는 특성은?",
    "answer": "다형성",
    "aliases": [
      "다형성",
      "Polymorphism"
    ],
    "explanation": "공통 인터페이스를 통해 서로 다른 구현을 사용할 수 있습니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q116",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "복잡한 대상에서 공통된 본질만 뽑고 불필요한 세부사항을 생략하는 개념은?",
    "answer": "추상화",
    "aliases": [
      "추상화",
      "Abstraction"
    ],
    "explanation": "추상화는 중요한 특징을 중심으로 모델을 단순화합니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q117",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "클래스 정의를 바탕으로 실제 생성된 개별 객체를 무엇이라고 하는가?",
    "answer": "인스턴스",
    "aliases": [
      "인스턴스",
      "Instance"
    ],
    "explanation": "클래스가 설계도라면 인스턴스는 그 설계도로 만든 객체입니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q118",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "상위 클래스의 메서드를 하위 클래스에서 같은 시그니처로 재정의하는 것은?",
    "answer": "오버라이딩",
    "aliases": [
      "오버라이딩",
      "Overriding"
    ],
    "explanation": "상속된 메서드의 구현을 하위 클래스에서 새로 제공합니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q119",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "메서드 이름은 같고 매개변수의 타입이나 개수가 다른 메서드들을 정의하는 것은?",
    "answer": "오버로딩",
    "aliases": [
      "오버로딩",
      "Overloading"
    ],
    "explanation": "호출 시 전달한 매개변수에 따라 사용할 메서드를 선택합니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q120",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "클래스는 하나의 책임과 변경 이유만 가져야 한다는 SOLID 원칙의 약어는?",
    "answer": "SRP",
    "aliases": [
      "SRP",
      "단일 책임 원칙",
      "Single Responsibility Principle"
    ],
    "explanation": "단일 책임 원칙은 서로 다른 변경 이유를 분리하도록 합니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q121",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "클라이언트가 사용하지 않는 메서드에 의존하지 않도록 인터페이스를 나누는 원칙은?",
    "answer": "ISP",
    "aliases": [
      "ISP",
      "인터페이스 분리 원칙",
      "Interface Segregation Principle"
    ],
    "explanation": "인터페이스 분리 원칙은 클라이언트별로 필요한 인터페이스를 제공합니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q122",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "상위 모듈과 하위 모듈이 구체적인 구현보다 추상화에 의존해야 한다는 원칙은?",
    "answer": "DIP",
    "aliases": [
      "DIP",
      "의존 역전 원칙",
      "Dependency Inversion Principle"
    ],
    "explanation": "의존 역전 원칙은 구현 세부사항보다 인터페이스 등 추상화에 의존하도록 합니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q123",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "여러 모듈이 같은 전역 데이터를 공유할 때 나타나는 결합도는?",
    "answer": "공통 결합도",
    "aliases": [
      "공통 결합도",
      "Common Coupling",
      "공유 결합도"
    ],
    "explanation": "공유 전역 데이터의 변경이 여러 모듈에 영향을 줄 수 있습니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q124",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "한 모듈이 다른 모듈의 내부 코드나 자료를 직접 참조·수정하는 결합도는?",
    "answer": "내용 결합도",
    "aliases": [
      "내용 결합도",
      "Content Coupling"
    ],
    "explanation": "다른 모듈의 내부에 직접 의존하므로 결합도가 매우 높습니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q125",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "모듈 간에 처리 방식을 결정하는 플래그 같은 제어 정보를 전달하는 결합도는?",
    "answer": "제어 결합도",
    "aliases": [
      "제어 결합도",
      "Control Coupling"
    ],
    "explanation": "데이터뿐 아니라 상대 모듈의 처리 방식에 대한 정보도 전달합니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q126",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "모듈 간에 배열이나 레코드 같은 자료 구조 전체를 전달하는 결합도는?",
    "answer": "스탬프 결합도",
    "aliases": [
      "스탬프 결합도",
      "Stamp Coupling",
      "자료 구조 결합도"
    ],
    "explanation": "자료 구조 변경이 전달받는 모듈에도 영향을 줍니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q127",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "모듈의 모든 요소가 하나의 명확한 기능을 수행하는 가장 높은 수준의 응집도는?",
    "answer": "기능적 응집도",
    "aliases": [
      "기능적 응집도",
      "Functional Cohesion",
      "기능 응집도"
    ],
    "explanation": "하나의 목적을 위한 요소들로 구성되어 관련성이 높습니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q128",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "한 처리의 출력이 다음 처리의 입력으로 이어지도록 구성한 모듈의 응집도는?",
    "answer": "순차적 응집도",
    "aliases": [
      "순차적 응집도",
      "Sequential Cohesion",
      "순차 응집도"
    ],
    "explanation": "처리 단계가 데이터의 흐름으로 연결됩니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q129",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "동일한 입력 또는 출력 데이터를 사용하는 처리들을 모은 응집도는?",
    "answer": "통신적 응집도",
    "aliases": [
      "통신적 응집도",
      "Communicational Cohesion",
      "통신 응집도"
    ],
    "explanation": "여러 처리가 같은 데이터를 사용하는 관계로 묶입니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q130",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "객체의 상태를 저장해 두었다가 이전 상태로 복원하는 행위 패턴은?",
    "answer": "메멘토",
    "aliases": [
      "메멘토",
      "Memento"
    ],
    "explanation": "Memento는 객체의 내부 상태를 보존하고 복원하는 데 사용됩니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q131",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "교체 가능한 알고리즘들을 각각 캡슐화하여 실행 시 선택하는 패턴은?",
    "answer": "전략",
    "aliases": [
      "전략",
      "Strategy",
      "전략 패턴"
    ],
    "explanation": "Strategy는 알고리즘들을 공통 인터페이스로 분리합니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q132",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "객체의 내부 상태에 따라 동일한 요청의 처리 방식이 달라지게 하는 패턴은?",
    "answer": "상태",
    "aliases": [
      "상태",
      "State",
      "상태 패턴"
    ],
    "explanation": "State는 상태별 동작을 별도 객체로 분리합니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q133",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "컬렉션의 내부 구조를 공개하지 않고 요소에 순차적으로 접근하게 하는 패턴은?",
    "answer": "반복자",
    "aliases": [
      "반복자",
      "Iterator",
      "이터레이터"
    ],
    "explanation": "Iterator는 순회 동작을 컬렉션의 표현 방식과 분리합니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q134",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "객체 간 복잡한 상호작용을 하나의 중재 객체로 모으는 패턴은?",
    "answer": "중재자",
    "aliases": [
      "중재자",
      "Mediator"
    ],
    "explanation": "Mediator는 객체들이 서로를 직접 참조하는 관계를 줄입니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q135",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "요청 자체를 객체로 만들어 큐에 저장하거나 실행 취소를 지원하는 패턴은?",
    "answer": "커맨드",
    "aliases": [
      "커맨드",
      "Command",
      "명령 패턴"
    ],
    "explanation": "Command는 요청을 실행하는 대상과 호출자를 분리합니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q136",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "여러 처리 객체를 연결하여 요청을 처리할 수 있는 객체까지 전달하는 패턴은?",
    "answer": "책임 연쇄",
    "aliases": [
      "책임 연쇄",
      "Chain of Responsibility",
      "책임 연쇄 패턴"
    ],
    "explanation": "Chain of Responsibility는 요청을 처리자들의 연결을 따라 넘깁니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q137",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "알고리즘의 큰 흐름은 상위 클래스에 두고 일부 단계는 하위 클래스가 구현하는 패턴은?",
    "answer": "템플릿 메서드",
    "aliases": [
      "템플릿 메서드",
      "Template Method",
      "템플릿 메소드"
    ],
    "explanation": "Template Method는 공통 절차와 변경되는 단계를 분리합니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q138",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "같은 테스트만 반복해서 새로운 결함을 찾기 어려워지는 현상은?",
    "answer": "살충제 패러독스",
    "aliases": [
      "살충제 패러독스",
      "Pesticide Paradox"
    ],
    "explanation": "새로운 결함을 찾으려면 테스트 데이터와 케이스를 검토하고 개선해야 합니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q139",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "프로그램을 실행하지 않고 문서나 소스코드를 검토하는 테스트는?",
    "answer": "정적 테스트",
    "aliases": [
      "정적 테스트",
      "Static Testing",
      "정적"
    ],
    "explanation": "코드 검토, 인스펙션, 워크스루 등은 실행하지 않고 수행합니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q140",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "모든 실행 문장을 최소 한 번씩 실행하는지 측정하는 커버리지는?",
    "answer": "문장 커버리지",
    "aliases": [
      "문장 커버리지",
      "Statement Coverage",
      "구문 커버리지"
    ],
    "explanation": "문장 실행 여부를 측정하며 모든 분기 결과를 보장하지는 않습니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q141",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "각 분기의 참과 거짓 결과를 최소 한 번씩 수행하는 커버리지는?",
    "answer": "분기 커버리지",
    "aliases": [
      "분기 커버리지",
      "Branch Coverage",
      "결정 커버리지"
    ],
    "explanation": "결정 결과의 각 경로가 실행되는지 확인합니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q142",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "모듈들을 결합하며 모듈 사이 인터페이스의 결함을 찾는 테스트는?",
    "answer": "통합 테스트",
    "aliases": [
      "통합 테스트",
      "Integration Testing",
      "통합"
    ],
    "explanation": "개별 단위 검증 이후 연결된 모듈 간의 상호작용을 검사합니다.",
    "source": 2,
    "page": 9
  },
  {
    "id": "q143",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "사용자가 개발자의 통제된 환경에서 수행하는 인수 테스트는?",
    "answer": "알파 테스트",
    "aliases": [
      "알파 테스트",
      "Alpha Testing",
      "알파"
    ],
    "explanation": "알파 테스트는 개발자와 함께 통제된 환경에서 수행합니다.",
    "source": 2,
    "page": 9
  },
  {
    "id": "q144",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "실제 사용자가 자신의 사용 환경에서 제품을 사용하며 검증하는 인수 테스트는?",
    "answer": "베타 테스트",
    "aliases": [
      "베타 테스트",
      "Beta Testing",
      "베타"
    ],
    "explanation": "베타 테스트는 실제 환경에서 사용자가 수행합니다.",
    "source": 2,
    "page": 9
  },
  {
    "id": "q145",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "소프트웨어 변경 사항을 식별·통제·감사하고 상태를 기록하는 관리 활동은?",
    "answer": "형상 관리",
    "aliases": [
      "형상 관리",
      "SCM",
      "소프트웨어 형상 관리",
      "Configuration Management"
    ],
    "explanation": "버전 및 변경 이력을 추적하고 기준선을 관리합니다.",
    "source": 2,
    "page": 9
  },
  {
    "id": "q146",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "사용자마다 필요로 하는 데이터의 논리적 관점을 나타내는 스키마는?",
    "answer": "외부 스키마",
    "aliases": [
      "외부 스키마",
      "External Schema",
      "서브 스키마"
    ],
    "explanation": "하나의 데이터베이스에 사용자별 외부 스키마가 여러 개 있을 수 있습니다.",
    "source": 2,
    "page": 10
  },
  {
    "id": "q147",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "데이터베이스 전체의 논리적 구조와 제약을 정의하는 스키마는?",
    "answer": "개념 스키마",
    "aliases": [
      "개념 스키마",
      "Conceptual Schema"
    ],
    "explanation": "조직 전체의 통합된 논리적 데이터 구조를 정의합니다.",
    "source": 2,
    "page": 10
  },
  {
    "id": "q148",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "파일 구성과 저장 방식 등 데이터의 물리적 저장 구조를 정의하는 스키마는?",
    "answer": "내부 스키마",
    "aliases": [
      "내부 스키마",
      "Internal Schema"
    ],
    "explanation": "내부 스키마는 물리적인 저장장치에서의 구현을 나타냅니다.",
    "source": 2,
    "page": 10
  },
  {
    "id": "q149",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "튜플을 유일하게 식별하는 속성 집합 중 최소성을 만족하는 키는?",
    "answer": "후보키",
    "aliases": [
      "후보키",
      "Candidate Key"
    ],
    "explanation": "후보키는 유일성과 최소성을 모두 만족합니다.",
    "source": 2,
    "page": 10
  },
  {
    "id": "q150",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "튜플을 유일하게 식별하지만 불필요한 속성을 포함할 수도 있는 키는?",
    "answer": "슈퍼키",
    "aliases": [
      "슈퍼키",
      "Super Key",
      "Superkey"
    ],
    "explanation": "슈퍼키는 유일성을 만족하며 최소성은 요구하지 않습니다.",
    "source": 2,
    "page": 10
  },
  {
    "id": "q151",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "후보키 중 기본키로 선택되지 않은 나머지 키는?",
    "answer": "대체키",
    "aliases": [
      "대체키",
      "Alternate Key"
    ],
    "explanation": "기본키를 제외한 후보키를 대체키라고 합니다.",
    "source": 2,
    "page": 10
  },
  {
    "id": "q152",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "기본키가 NULL이거나 중복된 값을 가지지 못하도록 하는 무결성은?",
    "answer": "개체 무결성",
    "aliases": [
      "개체 무결성",
      "Entity Integrity"
    ],
    "explanation": "기본키로 각 튜플을 고유하게 식별할 수 있어야 합니다.",
    "source": 2,
    "page": 10
  },
  {
    "id": "q153",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "외래키 값이 참조 대상 키에 존재하거나 허용된 NULL이어야 한다는 무결성은?",
    "answer": "참조 무결성",
    "aliases": [
      "참조 무결성",
      "Referential Integrity"
    ],
    "explanation": "다른 테이블을 참조하는 관계가 깨지지 않도록 보장합니다.",
    "source": 2,
    "page": 10
  },
  {
    "id": "q154",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "특정 데이터를 지울 때 유지해야 할 다른 정보도 함께 사라지는 이상 현상은?",
    "answer": "삭제 이상",
    "aliases": [
      "삭제 이상",
      "Deletion Anomaly"
    ],
    "explanation": "하나의 릴레이션에 여러 사실을 함께 저장할 때 발생할 수 있습니다.",
    "source": 2,
    "page": 11
  },
  {
    "id": "q155",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "같은 사실이 여러 행에 중복되어 일부 행만 수정하면 불일치가 생기는 이상 현상은?",
    "answer": "갱신 이상",
    "aliases": [
      "갱신 이상",
      "Update Anomaly"
    ],
    "explanation": "중복 정보의 일부만 수정되어 데이터 간 모순이 생깁니다.",
    "source": 2,
    "page": 11
  },
  {
    "id": "q156",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "관계대수에서 조건에 맞는 행만 선택하는 연산은?",
    "answer": "셀렉션",
    "aliases": [
      "셀렉션",
      "Selection",
      "선택",
      "Select"
    ],
    "explanation": "Selection은 행을 선택합니다. Projection은 열을 선택합니다.",
    "source": 2,
    "page": 11
  },
  {
    "id": "q157",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "관계대수에서 지정한 속성들만 추출하는 연산은?",
    "answer": "프로젝션",
    "aliases": [
      "프로젝션",
      "Projection",
      "투영",
      "Project"
    ],
    "explanation": "Projection은 원하는 열을 선택하며 관계대수에서는 중복 튜플을 제거합니다.",
    "source": 2,
    "page": 11
  },
  {
    "id": "q158",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "SQL에서 테이블 구조를 새로 정의하는 명령은?",
    "answer": "CREATE",
    "aliases": [
      "CREATE",
      "CREATE TABLE"
    ],
    "explanation": "CREATE TABLE로 테이블과 속성, 제약 조건을 정의할 수 있습니다.",
    "source": 2,
    "page": 22
  },
  {
    "id": "q159",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "SQL에서 기존 테이블의 구조를 변경하는 명령은?",
    "answer": "ALTER",
    "aliases": [
      "ALTER",
      "ALTER TABLE"
    ],
    "explanation": "ALTER TABLE은 열 추가 등 테이블 정의를 변경할 때 사용합니다.",
    "source": 2,
    "page": 22
  },
  {
    "id": "q160",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "SQL에서 테이블 정의 자체를 제거하는 명령은?",
    "answer": "DROP",
    "aliases": [
      "DROP",
      "DROP TABLE"
    ],
    "explanation": "DROP TABLE은 테이블 객체 자체를 삭제합니다. DELETE는 행을 삭제합니다.",
    "source": 2,
    "page": 22
  },
  {
    "id": "q161",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "SQL에서 사용자에게 부여된 접근 권한을 취소하는 명령은?",
    "answer": "REVOKE",
    "aliases": [
      "REVOKE"
    ],
    "explanation": "GRANT는 권한 부여, REVOKE는 권한 회수 명령입니다.",
    "source": 2,
    "page": 22
  },
  {
    "id": "q162",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "현재 트랜잭션의 변경 사항을 취소하는 SQL 명령은?",
    "answer": "ROLLBACK",
    "aliases": [
      "ROLLBACK"
    ],
    "explanation": "COMMIT으로 확정하기 전 변경을 되돌리는 데 사용합니다.",
    "source": 2,
    "page": 22
  },
  {
    "id": "q163",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "ORDER BY에서 결과를 내림차순으로 정렬할 때 쓰는 키워드는?",
    "answer": "DESC",
    "aliases": [
      "DESC"
    ],
    "explanation": "DESC는 내림차순, ASC는 오름차순 정렬입니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q164",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "SQL에서 NULL 값인지 검사하는 조건 연산은?",
    "answer": "IS NULL",
    "aliases": [
      "IS NULL"
    ],
    "explanation": "NULL은 등호로 비교하지 않습니다. NULL 여부는 IS NULL로 검사합니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q165",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "두 SELECT 결과를 중복 제거 없이 합치는 SQL 연산자는?",
    "answer": "UNION ALL",
    "aliases": [
      "UNION ALL"
    ],
    "explanation": "UNION은 중복을 제거하고 UNION ALL은 중복 행을 그대로 유지합니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q166",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "외래키에 ON DELETE CASCADE가 있으면 부모 행 삭제 시 자식 행은 어떻게 되는가?",
    "answer": "함께 삭제된다",
    "aliases": [
      "함께 삭제된다",
      "연쇄 삭제",
      "삭제",
      "함께 삭제"
    ],
    "explanation": "참조하는 자식 행에 삭제가 연쇄 적용됩니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q167",
    "category": "운영체제",
    "type": "short",
    "prompt": "프로그램을 크기가 다른 논리적 단위로 나누어 메모리에 배치하는 기법은?",
    "answer": "세그먼테이션",
    "aliases": [
      "세그먼테이션",
      "Segmentation"
    ],
    "explanation": "세그먼트는 함수나 데이터 등 논리적 단위이며 외부 단편화가 생길 수 있습니다.",
    "source": 2,
    "page": 13
  },
  {
    "id": "q168",
    "category": "운영체제",
    "type": "short",
    "prompt": "빈 메모리 공간을 순서대로 살펴보고 처음으로 충분히 큰 영역에 배치하는 방식은?",
    "answer": "최초 적합",
    "aliases": [
      "최초 적합",
      "First Fit"
    ],
    "explanation": "First Fit은 적재 가능한 첫 번째 빈 영역을 선택합니다.",
    "source": 2,
    "page": 13
  },
  {
    "id": "q169",
    "category": "운영체제",
    "type": "short",
    "prompt": "충분한 빈 영역 중 가장 작은 영역을 골라 메모리를 배치하는 방식은?",
    "answer": "최적 적합",
    "aliases": [
      "최적 적합",
      "Best Fit"
    ],
    "explanation": "Best Fit은 할당 후 남는 공간이 가장 적은 영역을 선택합니다.",
    "source": 2,
    "page": 13
  },
  {
    "id": "q170",
    "category": "운영체제",
    "type": "short",
    "prompt": "빈 메모리 영역 중 가장 큰 영역을 골라 배치하는 방식은?",
    "answer": "최악 적합",
    "aliases": [
      "최악 적합",
      "Worst Fit"
    ],
    "explanation": "Worst Fit은 가장 큰 빈 영역을 선택합니다.",
    "source": 2,
    "page": 13
  },
  {
    "id": "q171",
    "category": "운영체제",
    "type": "short",
    "prompt": "앞으로 가장 오랫동안 참조되지 않을 페이지를 교체하는 이론적 알고리즘은?",
    "answer": "OPT",
    "aliases": [
      "OPT",
      "최적 페이지 교체",
      "Optimal"
    ],
    "explanation": "미래 참조 정보를 사용하므로 성능 비교 기준으로 주로 사용합니다.",
    "source": 2,
    "page": 13
  },
  {
    "id": "q172",
    "category": "운영체제",
    "type": "short",
    "prompt": "페이지가 메모리에 없어서 보조기억장치에서 읽어와야 하는 사건은?",
    "answer": "페이지 부재",
    "aliases": [
      "페이지 부재",
      "Page Fault",
      "페이지 폴트",
      "페이지 결함"
    ],
    "explanation": "Page Fault가 발생하면 운영체제가 해당 페이지를 적재해야 합니다.",
    "source": 2,
    "page": 13
  },
  {
    "id": "q173",
    "category": "운영체제",
    "type": "short",
    "prompt": "짧은 시간 내에 같은 메모리 위치를 다시 참조할 가능성이 높은 특성은?",
    "answer": "시간 지역성",
    "aliases": [
      "시간 지역성",
      "Temporal Locality",
      "시간적 지역성"
    ],
    "explanation": "최근 참조한 데이터나 명령을 곧 다시 사용할 가능성을 의미합니다.",
    "source": 2,
    "page": 13
  },
  {
    "id": "q174",
    "category": "운영체제",
    "type": "short",
    "prompt": "참조한 메모리 위치 주변의 인접한 위치를 곧 참조할 가능성이 높은 특성은?",
    "answer": "공간 지역성",
    "aliases": [
      "공간 지역성",
      "Spatial Locality",
      "공간적 지역성"
    ],
    "explanation": "배열의 연속 접근은 공간 지역성의 예입니다.",
    "source": 2,
    "page": 13
  },
  {
    "id": "q175",
    "category": "운영체제",
    "type": "short",
    "prompt": "CPU를 요청한 도착 순서대로 처리하는 비선점 스케줄링의 약어는?",
    "answer": "FCFS",
    "aliases": [
      "FCFS",
      "FIFO",
      "First Come First Served"
    ],
    "explanation": "First Come First Served는 준비 큐에 들어온 순서대로 실행합니다.",
    "source": 2,
    "page": 26
  },
  {
    "id": "q176",
    "category": "운영체제",
    "type": "short",
    "prompt": "실행 중인 작업도 선점하면서 남은 실행 시간이 가장 짧은 작업을 우선하는 기법은?",
    "answer": "SRT",
    "aliases": [
      "SRT",
      "SRTF",
      "Shortest Remaining Time"
    ],
    "explanation": "SRT는 SJF의 선점형이며 SRTF라고도 합니다.",
    "source": 2,
    "page": 26
  },
  {
    "id": "q177",
    "category": "운영체제",
    "type": "short",
    "prompt": "대기 시간과 실행 시간으로 응답 비율을 계산하여 긴 대기 작업을 배려하는 스케줄링은?",
    "answer": "HRN",
    "aliases": [
      "HRN",
      "Highest Response Ratio Next",
      "HRRN"
    ],
    "explanation": "우선순위는 (대기 시간 + 실행 시간) ÷ 실행 시간이며 값이 큰 작업을 먼저 실행합니다.",
    "source": 2,
    "page": 26
  },
  {
    "id": "q178",
    "category": "네트워크",
    "type": "short",
    "prompt": "OSI 모델에서 프레임 단위로 인접 노드 사이 전송을 담당하는 계층은?",
    "answer": "데이터 링크 계층",
    "aliases": [
      "데이터 링크 계층",
      "Data Link Layer",
      "데이터 링크",
      "2계층"
    ],
    "explanation": "데이터 링크 계층은 2계층이며 프레임과 MAC 주소 등을 다룹니다.",
    "source": 2,
    "page": 16
  },
  {
    "id": "q179",
    "category": "네트워크",
    "type": "short",
    "prompt": "OSI 모델에서 전기적 신호와 비트 전송을 담당하는 계층은?",
    "answer": "물리 계층",
    "aliases": [
      "물리 계층",
      "Physical Layer",
      "물리",
      "1계층"
    ],
    "explanation": "물리 계층은 1계층으로 전송 매체와 신호를 다룹니다.",
    "source": 2,
    "page": 16
  },
  {
    "id": "q180",
    "category": "네트워크",
    "type": "short",
    "prompt": "OSI 모델에서 데이터의 인코딩 변환, 암호화, 압축을 담당하는 계층은?",
    "answer": "표현 계층",
    "aliases": [
      "표현 계층",
      "Presentation Layer",
      "표현",
      "6계층"
    ],
    "explanation": "표현 계층은 6계층으로 데이터 표현 형식의 차이를 해결합니다.",
    "source": 2,
    "page": 16
  },
  {
    "id": "q181",
    "category": "네트워크",
    "type": "short",
    "prompt": "OSI 모델에서 통신 세션의 설정·유지·종료를 담당하는 계층은?",
    "answer": "세션 계층",
    "aliases": [
      "세션 계층",
      "Session Layer",
      "세션",
      "5계층"
    ],
    "explanation": "세션 계층은 5계층으로 응용 사이 대화와 동기화를 관리합니다.",
    "source": 2,
    "page": 16
  },
  {
    "id": "q182",
    "category": "네트워크",
    "type": "short",
    "prompt": "호스트에 IP 주소, 게이트웨이 등 네트워크 설정을 자동으로 할당하는 프로토콜은?",
    "answer": "DHCP",
    "aliases": [
      "DHCP",
      "Dynamic Host Configuration Protocol"
    ],
    "explanation": "DHCP는 Dynamic Host Configuration Protocol입니다.",
    "source": 2,
    "page": 17
  },
  {
    "id": "q183",
    "category": "네트워크",
    "type": "short",
    "prompt": "네트워크의 오류 보고와 진단 메시지 전달에 쓰이며 ping에도 사용되는 프로토콜은?",
    "answer": "ICMP",
    "aliases": [
      "ICMP",
      "Internet Control Message Protocol"
    ],
    "explanation": "ICMP는 IP 통신의 상태와 오류를 알리는 제어 메시지를 전달합니다.",
    "source": 2,
    "page": 17
  },
  {
    "id": "q184",
    "category": "네트워크",
    "type": "short",
    "prompt": "사설 네트워크 주소와 외부 공인 주소를 변환하는 기술의 약어는?",
    "answer": "NAT",
    "aliases": [
      "NAT",
      "Network Address Translation"
    ],
    "explanation": "Network Address Translation은 주소 공간 변환에 사용됩니다.",
    "source": 2,
    "page": 17
  },
  {
    "id": "q185",
    "category": "네트워크",
    "type": "short",
    "prompt": "물리적 연결 위치와 관계없이 논리적인 LAN 그룹을 구성하는 기술의 약어는?",
    "answer": "VLAN",
    "aliases": [
      "VLAN",
      "Virtual LAN"
    ],
    "explanation": "Virtual LAN은 하나의 물리적 네트워크를 논리적으로 분리합니다.",
    "source": 2,
    "page": 21
  },
  {
    "id": "q186",
    "category": "네트워크",
    "type": "short",
    "prompt": "IoT에서 많이 사용하는 경량 발행·구독 메시징 프로토콜은?",
    "answer": "MQTT",
    "aliases": [
      "MQTT"
    ],
    "explanation": "클라이언트는 브로커를 통해 토픽에 메시지를 발행하거나 구독합니다.",
    "source": 2,
    "page": 21
  },
  {
    "id": "q187",
    "category": "네트워크",
    "type": "short",
    "prompt": "네트워크 계층에서 서로 다른 네트워크 사이에 패킷을 전달하는 장비는?",
    "answer": "라우터",
    "aliases": [
      "라우터",
      "Router"
    ],
    "explanation": "라우터는 라우팅 정보를 이용해 다음 경로를 선택합니다.",
    "source": 2,
    "page": 21
  },
  {
    "id": "q188",
    "category": "보안",
    "type": "short",
    "prompt": "공격이나 비정상적인 활동을 탐지하여 경보를 제공하는 보안 시스템의 약어는?",
    "answer": "IDS",
    "aliases": [
      "IDS",
      "Intrusion Detection System",
      "침입 탐지 시스템"
    ],
    "explanation": "침입 탐지 시스템은 이상 징후를 탐지하고 알립니다.",
    "source": 2,
    "page": 18
  },
  {
    "id": "q189",
    "category": "보안",
    "type": "short",
    "prompt": "탐지한 공격 트래픽을 능동적으로 차단하는 보안 시스템의 약어는?",
    "answer": "IPS",
    "aliases": [
      "IPS",
      "Intrusion Prevention System",
      "침입 방지 시스템"
    ],
    "explanation": "침입 방지 시스템은 공격을 탐지하고 차단할 수 있습니다.",
    "source": 2,
    "page": 18
  },
  {
    "id": "q190",
    "category": "보안",
    "type": "short",
    "prompt": "SQL 삽입과 XSS 같은 웹 애플리케이션 공격에 대응하는 방화벽의 약어는?",
    "answer": "WAF",
    "aliases": [
      "WAF",
      "Web Application Firewall",
      "웹 방화벽"
    ],
    "explanation": "웹 애플리케이션 방화벽은 HTTP 요청 등을 분석해 웹 공격을 차단합니다.",
    "source": 2,
    "page": 18
  },
  {
    "id": "q191",
    "category": "보안",
    "type": "short",
    "prompt": "내부의 중요 정보가 외부로 유출되는 것을 탐지·차단하는 솔루션의 약어는?",
    "answer": "DLP",
    "aliases": [
      "DLP",
      "Data Loss Prevention",
      "데이터 유출 방지"
    ],
    "explanation": "Data Loss Prevention은 민감 데이터의 유출을 통제합니다.",
    "source": 2,
    "page": 18
  },
  {
    "id": "q192",
    "category": "보안",
    "type": "short",
    "prompt": "공중 네트워크를 통해 암호화된 사설 연결을 제공하는 기술의 약어는?",
    "answer": "VPN",
    "aliases": [
      "VPN",
      "Virtual Private Network",
      "가상 사설망"
    ],
    "explanation": "Virtual Private Network는 터널과 암호화 등을 이용해 사설 통신을 제공합니다.",
    "source": 2,
    "page": 18
  },
  {
    "id": "q193",
    "category": "보안",
    "type": "short",
    "prompt": "한 번만 사용할 수 있는 인증용 비밀번호를 뜻하는 약어는?",
    "answer": "OTP",
    "aliases": [
      "OTP",
      "One Time Password",
      "일회용 비밀번호"
    ],
    "explanation": "One Time Password는 유효 시간이나 사용 횟수가 제한된 비밀번호입니다.",
    "source": 2,
    "page": 18
  },
  {
    "id": "q194",
    "category": "보안",
    "type": "short",
    "prompt": "로그인한 사용자의 권한으로 의도하지 않은 요청을 보내게 하는 공격의 약어는?",
    "answer": "CSRF",
    "aliases": [
      "CSRF",
      "Cross Site Request Forgery",
      "크로스 사이트 요청 위조"
    ],
    "explanation": "사용자가 인증된 상태를 악용해 요청을 위조하는 공격입니다.",
    "source": 2,
    "page": 19
  },
  {
    "id": "q195",
    "category": "보안",
    "type": "short",
    "prompt": "문서 파일 등을 암호화하여 이용을 막고 금전을 요구하는 악성코드는?",
    "answer": "랜섬웨어",
    "aliases": [
      "랜섬웨어",
      "Ransomware"
    ],
    "explanation": "복구를 대가로 금전을 요구하는 악성코드입니다.",
    "source": 2,
    "page": 19
  },
  {
    "id": "q196",
    "category": "보안",
    "type": "short",
    "prompt": "다른 프로그램에 기생하지 않고 스스로 복제·전파하는 악성코드는?",
    "answer": "웜",
    "aliases": [
      "웜",
      "Worm"
    ],
    "explanation": "웜은 독립적으로 실행되며 네트워크 등을 통해 전파할 수 있습니다.",
    "source": 2,
    "page": 19
  },
  {
    "id": "q197",
    "category": "보안",
    "type": "short",
    "prompt": "정상적인 프로그램처럼 위장해 사용자가 실행하도록 유도하는 악성코드는?",
    "answer": "트로이 목마",
    "aliases": [
      "트로이 목마",
      "Trojan Horse",
      "트로이목마"
    ],
    "explanation": "정상 프로그램으로 가장하며 자체 복제 기능은 일반적인 특징이 아닙니다.",
    "source": 2,
    "page": 19
  },
  {
    "id": "q198",
    "category": "보안",
    "type": "short",
    "prompt": "기관이나 지인을 사칭하여 비밀번호나 금융 정보를 입력하도록 유도하는 공격은?",
    "answer": "피싱",
    "aliases": [
      "피싱",
      "Phishing"
    ],
    "explanation": "신뢰할 만한 발신자인 것처럼 속여 정보를 탈취합니다.",
    "source": 2,
    "page": 19
  },
  {
    "id": "q199",
    "category": "보안",
    "type": "short",
    "prompt": "문자 메시지에 악성 링크 등을 보내 정보를 탈취하는 공격은?",
    "answer": "스미싱",
    "aliases": [
      "스미싱",
      "Smishing"
    ],
    "explanation": "SMS를 이용한 피싱 공격입니다.",
    "source": 2,
    "page": 19
  },
  {
    "id": "q200",
    "category": "보안",
    "type": "short",
    "prompt": "네트워크에서 전송되는 패킷을 엿보아 정보를 수집하는 행위는?",
    "answer": "스니핑",
    "aliases": [
      "스니핑",
      "Sniffing"
    ],
    "explanation": "Sniffing은 통신 데이터를 도청하는 행위입니다.",
    "source": 2,
    "page": 19
  },
  {
    "id": "q201",
    "category": "보안",
    "type": "short",
    "prompt": "다른 사용자나 시스템의 주소·신원인 것처럼 위장하는 공격은?",
    "answer": "스푸핑",
    "aliases": [
      "스푸핑",
      "Spoofing"
    ],
    "explanation": "Spoofing에는 IP, ARP, DNS 등을 이용한 위장이 있습니다.",
    "source": 2,
    "page": 19
  },
  {
    "id": "q202",
    "category": "보안",
    "type": "short",
    "prompt": "공격 대상이 자주 방문하는 웹사이트를 미리 감염시키는 공격은?",
    "answer": "워터링 홀",
    "aliases": [
      "워터링 홀",
      "Watering Hole",
      "워터링홀"
    ],
    "explanation": "Watering Hole은 대상의 방문 경로를 이용하여 감염을 유도합니다.",
    "source": 2,
    "page": 19
  },
  {
    "id": "q203",
    "category": "보안",
    "type": "short",
    "prompt": "다른 서비스에서 유출된 아이디·비밀번호 조합으로 로그인을 시도하는 공격은?",
    "answer": "크리덴셜 스터핑",
    "aliases": [
      "크리덴셜 스터핑",
      "Credential Stuffing"
    ],
    "explanation": "여러 사이트에서 같은 인증 정보를 재사용하는 습관을 악용합니다.",
    "source": 2,
    "page": 19
  },
  {
    "id": "q204",
    "category": "보안",
    "type": "short",
    "prompt": "가능한 비밀번호 조합을 체계적으로 모두 대입하는 공격은?",
    "answer": "무차별 대입 공격",
    "aliases": [
      "무차별 대입 공격",
      "Brute Force",
      "Brute Force Attack",
      "브루트 포스"
    ],
    "explanation": "Brute Force는 가능한 조합을 반복하여 시도합니다.",
    "source": 2,
    "page": 19
  },
  {
    "id": "q205",
    "category": "보안",
    "type": "short",
    "prompt": "동일한 비밀번호도 서로 다른 해시값이 되도록 함께 넣는 무작위 데이터는?",
    "answer": "솔트",
    "aliases": [
      "솔트",
      "Salt",
      "소금"
    ],
    "explanation": "Salt는 사전 계산된 해시 테이블을 이용한 공격을 어렵게 합니다.",
    "source": 2,
    "page": 21
  },
  {
    "id": "q206",
    "category": "보안",
    "type": "short",
    "prompt": "프로그램의 메모리 주소 배치를 실행마다 무작위화하는 보안 기술의 약어는?",
    "answer": "ASLR",
    "aliases": [
      "ASLR",
      "Address Space Layout Randomization"
    ],
    "explanation": "Address Space Layout Randomization은 공격자의 주소 예측을 어렵게 합니다.",
    "source": 2,
    "page": 21
  },
  {
    "id": "q207",
    "category": "보안",
    "type": "short",
    "prompt": "한 번 인증하면 여러 서비스에 다시 로그인하지 않고 접근하게 하는 인증 방식의 약어는?",
    "answer": "SSO",
    "aliases": [
      "SSO",
      "Single Sign On",
      "싱글 사인 온"
    ],
    "explanation": "Single Sign On은 여러 서비스 사이의 통합 인증을 제공합니다.",
    "source": 2,
    "page": 21
  },
  {
    "id": "q208",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "서버·네트워크·스토리지 같은 가상 인프라를 제공하는 클라우드 서비스 모델은?",
    "answer": "IaaS",
    "aliases": [
      "IaaS"
    ],
    "explanation": "Infrastructure as a Service는 인프라 자원을 서비스로 제공합니다.",
    "source": 2,
    "page": 20
  },
  {
    "id": "q209",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "응용 개발에 필요한 런타임과 플랫폼 환경을 서비스로 제공하는 모델은?",
    "answer": "PaaS",
    "aliases": [
      "PaaS"
    ],
    "explanation": "Platform as a Service는 애플리케이션 실행 및 개발 플랫폼을 제공합니다.",
    "source": 2,
    "page": 20
  },
  {
    "id": "q210",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "사용자가 설치·서버 운영 부담을 줄이고 완성된 소프트웨어를 이용하는 서비스 모델은?",
    "answer": "SaaS",
    "aliases": [
      "SaaS"
    ],
    "explanation": "Software as a Service는 애플리케이션 기능을 서비스로 제공합니다.",
    "source": 2,
    "page": 20
  },
  {
    "id": "q211",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "기업의 여러 애플리케이션을 연결해 데이터와 업무를 통합하는 기술의 약어는?",
    "answer": "EAI",
    "aliases": [
      "EAI",
      "Enterprise Application Integration"
    ],
    "explanation": "Enterprise Application Integration은 기업 내 이기종 시스템을 연계합니다.",
    "source": 2,
    "page": 20
  },
  {
    "id": "q212",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "키와 값의 쌍을 이용하여 데이터를 표현하는 대표적 경량 텍스트 포맷은?",
    "answer": "JSON",
    "aliases": [
      "JSON",
      "JavaScript Object Notation"
    ],
    "explanation": "JavaScript Object Notation은 데이터 교환에 사용되는 텍스트 포맷입니다.",
    "source": 2,
    "page": 20
  },
  {
    "id": "q213",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "XML 형식의 메시지를 이용하는 웹 서비스 통신 규약의 약어는?",
    "answer": "SOAP",
    "aliases": [
      "SOAP",
      "Simple Object Access Protocol"
    ],
    "explanation": "Simple Object Access Protocol은 구조화된 메시지 교환에 사용됩니다.",
    "source": 2,
    "page": 20
  },
  {
    "id": "q214",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n사용자가 시스템과 상호작용하며 수행하는 목표를 액터와 사용 사례로 표현하는 UML 다이어그램은?",
    "choices": [
      "유스케이스 다이어그램",
      "시퀀스 다이어그램",
      "상태 다이어그램",
      "활동 다이어그램"
    ],
    "answer": "유스케이스 다이어그램",
    "explanation": "액터가 시스템을 이용하는 기능을 사용자 관점에서 보여줍니다.",
    "source": 2,
    "page": 6
  },
  {
    "id": "q215",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n객체 사이의 메시지를 시간 순서에 따라 표현하는 UML 다이어그램은?",
    "choices": [
      "배치 다이어그램",
      "시퀀스 다이어그램",
      "와이어프레임",
      "목업"
    ],
    "answer": "시퀀스 다이어그램",
    "explanation": "생명선과 메시지로 상호작용의 순서를 표현합니다.",
    "source": 2,
    "page": 6
  },
  {
    "id": "q216",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n객체가 이벤트에 따라 어떤 상태로 전이하는지 표현하는 UML 다이어그램은?",
    "choices": [
      "MVC",
      "제이콥슨",
      "상태 다이어그램",
      "캡슐화"
    ],
    "answer": "상태 다이어그램",
    "explanation": "상태와 이벤트에 따른 전이를 표현하는 행위 다이어그램입니다.",
    "source": 2,
    "page": 6
  },
  {
    "id": "q217",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n조건과 분기를 포함해 작업의 처리 흐름을 표현하는 UML 다이어그램은?",
    "choices": [
      "상속",
      "다형성",
      "추상화",
      "활동 다이어그램"
    ],
    "answer": "활동 다이어그램",
    "explanation": "액티비티의 실행 흐름과 분기, 병렬 처리를 나타냅니다.",
    "source": 2,
    "page": 6
  },
  {
    "id": "q218",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n소프트웨어 구성 요소가 어떤 물리적 노드에 배치되는지 보여주는 UML 다이어그램은?",
    "choices": [
      "배치 다이어그램",
      "인스턴스",
      "오버라이딩",
      "오버로딩"
    ],
    "answer": "배치 다이어그램",
    "explanation": "서버 등 물리적 노드와 그 노드에 배치된 요소를 표현합니다.",
    "source": 2,
    "page": 6
  },
  {
    "id": "q219",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n화면의 레이아웃과 요소 위치를 기획 초기에 선과 상자로 나타내는 설계 산출물은?",
    "choices": [
      "SRP",
      "와이어프레임",
      "ISP",
      "DIP"
    ],
    "answer": "와이어프레임",
    "explanation": "상세한 디자인 이전에 화면 구조를 잡는 데 사용합니다.",
    "source": 2,
    "page": 6
  },
  {
    "id": "q220",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n실제 화면처럼 보이지만 상호작용 기능은 없는 정적인 화면 모형은?",
    "choices": [
      "공통 결합도",
      "내용 결합도",
      "목업",
      "제어 결합도"
    ],
    "answer": "목업",
    "explanation": "목업은 화면의 시각적 모습을 확인하는 정적인 모형입니다.",
    "source": 2,
    "page": 6
  },
  {
    "id": "q221",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n데이터·화면·입력 제어를 Model, View, Controller로 나누는 아키텍처의 약어는?",
    "choices": [
      "스탬프 결합도",
      "기능적 응집도",
      "순차적 응집도",
      "MVC"
    ],
    "answer": "MVC",
    "explanation": "Model은 데이터와 핵심 로직, View는 표시, Controller는 입력 처리를 맡습니다.",
    "source": 2,
    "page": 6
  },
  {
    "id": "q222",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n사용 사례를 중심으로 사용자와 외부 시스템의 상호작용을 분석하는 방법론의 제안자는?",
    "choices": [
      "제이콥슨",
      "통신적 응집도",
      "메멘토",
      "전략"
    ],
    "answer": "제이콥슨",
    "explanation": "Jacobson 방법론은 유스케이스를 중시합니다.",
    "source": 2,
    "page": 6
  },
  {
    "id": "q223",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n데이터와 이를 처리하는 메서드를 하나로 묶고 내부 구현의 접근을 제한하는 객체지향 특성은?",
    "choices": [
      "상태",
      "캡슐화",
      "반복자",
      "중재자"
    ],
    "answer": "캡슐화",
    "explanation": "관련 데이터와 동작을 묶고 외부에 필요한 인터페이스를 제공합니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q224",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n상위 클래스의 속성과 메서드를 하위 클래스에서 물려받는 객체지향 특성은?",
    "choices": [
      "커맨드",
      "책임 연쇄",
      "상속",
      "템플릿 메서드"
    ],
    "answer": "상속",
    "explanation": "상속은 공통 기능을 재사용하고 상위 타입을 확장하는 데 사용됩니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q225",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n같은 메시지나 메서드 호출이 객체의 실제 타입에 따라 다르게 동작하는 특성은?",
    "choices": [
      "살충제 패러독스",
      "정적 테스트",
      "문장 커버리지",
      "다형성"
    ],
    "answer": "다형성",
    "explanation": "공통 인터페이스를 통해 서로 다른 구현을 사용할 수 있습니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q226",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n복잡한 대상에서 공통된 본질만 뽑고 불필요한 세부사항을 생략하는 개념은?",
    "choices": [
      "추상화",
      "분기 커버리지",
      "통합 테스트",
      "알파 테스트"
    ],
    "answer": "추상화",
    "explanation": "추상화는 중요한 특징을 중심으로 모델을 단순화합니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q227",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n클래스 정의를 바탕으로 실제 생성된 개별 객체를 무엇이라고 하는가?",
    "choices": [
      "베타 테스트",
      "인스턴스",
      "형상 관리",
      "IaaS"
    ],
    "answer": "인스턴스",
    "explanation": "클래스가 설계도라면 인스턴스는 그 설계도로 만든 객체입니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q228",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n상위 클래스의 메서드를 하위 클래스에서 같은 시그니처로 재정의하는 것은?",
    "choices": [
      "PaaS",
      "SaaS",
      "오버라이딩",
      "EAI"
    ],
    "answer": "오버라이딩",
    "explanation": "상속된 메서드의 구현을 하위 클래스에서 새로 제공합니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q229",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n메서드 이름은 같고 매개변수의 타입이나 개수가 다른 메서드들을 정의하는 것은?",
    "choices": [
      "JSON",
      "SOAP",
      "유스케이스 다이어그램",
      "오버로딩"
    ],
    "answer": "오버로딩",
    "explanation": "호출 시 전달한 매개변수에 따라 사용할 메서드를 선택합니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q230",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n클래스는 하나의 책임과 변경 이유만 가져야 한다는 SOLID 원칙의 약어는?",
    "choices": [
      "SRP",
      "시퀀스 다이어그램",
      "상태 다이어그램",
      "활동 다이어그램"
    ],
    "answer": "SRP",
    "explanation": "단일 책임 원칙은 서로 다른 변경 이유를 분리하도록 합니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q231",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n클라이언트가 사용하지 않는 메서드에 의존하지 않도록 인터페이스를 나누는 원칙은?",
    "choices": [
      "배치 다이어그램",
      "ISP",
      "와이어프레임",
      "목업"
    ],
    "answer": "ISP",
    "explanation": "인터페이스 분리 원칙은 클라이언트별로 필요한 인터페이스를 제공합니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q232",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n상위 모듈과 하위 모듈이 구체적인 구현보다 추상화에 의존해야 한다는 원칙은?",
    "choices": [
      "MVC",
      "제이콥슨",
      "DIP",
      "캡슐화"
    ],
    "answer": "DIP",
    "explanation": "의존 역전 원칙은 구현 세부사항보다 인터페이스 등 추상화에 의존하도록 합니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q233",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n여러 모듈이 같은 전역 데이터를 공유할 때 나타나는 결합도는?",
    "choices": [
      "상속",
      "다형성",
      "추상화",
      "공통 결합도"
    ],
    "answer": "공통 결합도",
    "explanation": "공유 전역 데이터의 변경이 여러 모듈에 영향을 줄 수 있습니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q234",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n한 모듈이 다른 모듈의 내부 코드나 자료를 직접 참조·수정하는 결합도는?",
    "choices": [
      "내용 결합도",
      "인스턴스",
      "오버라이딩",
      "오버로딩"
    ],
    "answer": "내용 결합도",
    "explanation": "다른 모듈의 내부에 직접 의존하므로 결합도가 매우 높습니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q235",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n모듈 간에 처리 방식을 결정하는 플래그 같은 제어 정보를 전달하는 결합도는?",
    "choices": [
      "SRP",
      "제어 결합도",
      "ISP",
      "DIP"
    ],
    "answer": "제어 결합도",
    "explanation": "데이터뿐 아니라 상대 모듈의 처리 방식에 대한 정보도 전달합니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q236",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n모듈 간에 배열이나 레코드 같은 자료 구조 전체를 전달하는 결합도는?",
    "choices": [
      "공통 결합도",
      "내용 결합도",
      "스탬프 결합도",
      "제어 결합도"
    ],
    "answer": "스탬프 결합도",
    "explanation": "자료 구조 변경이 전달받는 모듈에도 영향을 줍니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q237",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n모듈의 모든 요소가 하나의 명확한 기능을 수행하는 가장 높은 수준의 응집도는?",
    "choices": [
      "스탬프 결합도",
      "순차적 응집도",
      "통신적 응집도",
      "기능적 응집도"
    ],
    "answer": "기능적 응집도",
    "explanation": "하나의 목적을 위한 요소들로 구성되어 관련성이 높습니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q238",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n한 처리의 출력이 다음 처리의 입력으로 이어지도록 구성한 모듈의 응집도는?",
    "choices": [
      "순차적 응집도",
      "메멘토",
      "전략",
      "상태"
    ],
    "answer": "순차적 응집도",
    "explanation": "처리 단계가 데이터의 흐름으로 연결됩니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q239",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n동일한 입력 또는 출력 데이터를 사용하는 처리들을 모은 응집도는?",
    "choices": [
      "반복자",
      "통신적 응집도",
      "중재자",
      "커맨드"
    ],
    "answer": "통신적 응집도",
    "explanation": "여러 처리가 같은 데이터를 사용하는 관계로 묶입니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q240",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n객체의 상태를 저장해 두었다가 이전 상태로 복원하는 행위 패턴은?",
    "choices": [
      "책임 연쇄",
      "템플릿 메서드",
      "메멘토",
      "살충제 패러독스"
    ],
    "answer": "메멘토",
    "explanation": "Memento는 객체의 내부 상태를 보존하고 복원하는 데 사용됩니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q241",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n교체 가능한 알고리즘들을 각각 캡슐화하여 실행 시 선택하는 패턴은?",
    "choices": [
      "정적 테스트",
      "문장 커버리지",
      "분기 커버리지",
      "전략"
    ],
    "answer": "전략",
    "explanation": "Strategy는 알고리즘들을 공통 인터페이스로 분리합니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q242",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n객체의 내부 상태에 따라 동일한 요청의 처리 방식이 달라지게 하는 패턴은?",
    "choices": [
      "상태",
      "통합 테스트",
      "알파 테스트",
      "베타 테스트"
    ],
    "answer": "상태",
    "explanation": "State는 상태별 동작을 별도 객체로 분리합니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q243",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n컬렉션의 내부 구조를 공개하지 않고 요소에 순차적으로 접근하게 하는 패턴은?",
    "choices": [
      "형상 관리",
      "반복자",
      "IaaS",
      "PaaS"
    ],
    "answer": "반복자",
    "explanation": "Iterator는 순회 동작을 컬렉션의 표현 방식과 분리합니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q244",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n객체 간 복잡한 상호작용을 하나의 중재 객체로 모으는 패턴은?",
    "choices": [
      "SaaS",
      "EAI",
      "중재자",
      "JSON"
    ],
    "answer": "중재자",
    "explanation": "Mediator는 객체들이 서로를 직접 참조하는 관계를 줄입니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q245",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n요청 자체를 객체로 만들어 큐에 저장하거나 실행 취소를 지원하는 패턴은?",
    "choices": [
      "SOAP",
      "유스케이스 다이어그램",
      "시퀀스 다이어그램",
      "커맨드"
    ],
    "answer": "커맨드",
    "explanation": "Command는 요청을 실행하는 대상과 호출자를 분리합니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q246",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n여러 처리 객체를 연결하여 요청을 처리할 수 있는 객체까지 전달하는 패턴은?",
    "choices": [
      "책임 연쇄",
      "상태 다이어그램",
      "활동 다이어그램",
      "배치 다이어그램"
    ],
    "answer": "책임 연쇄",
    "explanation": "Chain of Responsibility는 요청을 처리자들의 연결을 따라 넘깁니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q247",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n알고리즘의 큰 흐름은 상위 클래스에 두고 일부 단계는 하위 클래스가 구현하는 패턴은?",
    "choices": [
      "와이어프레임",
      "템플릿 메서드",
      "목업",
      "MVC"
    ],
    "answer": "템플릿 메서드",
    "explanation": "Template Method는 공통 절차와 변경되는 단계를 분리합니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q248",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n같은 테스트만 반복해서 새로운 결함을 찾기 어려워지는 현상은?",
    "choices": [
      "제이콥슨",
      "캡슐화",
      "살충제 패러독스",
      "상속"
    ],
    "answer": "살충제 패러독스",
    "explanation": "새로운 결함을 찾으려면 테스트 데이터와 케이스를 검토하고 개선해야 합니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q249",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n프로그램을 실행하지 않고 문서나 소스코드를 검토하는 테스트는?",
    "choices": [
      "다형성",
      "추상화",
      "인스턴스",
      "정적 테스트"
    ],
    "answer": "정적 테스트",
    "explanation": "코드 검토, 인스펙션, 워크스루 등은 실행하지 않고 수행합니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q250",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n모든 실행 문장을 최소 한 번씩 실행하는지 측정하는 커버리지는?",
    "choices": [
      "문장 커버리지",
      "오버라이딩",
      "오버로딩",
      "SRP"
    ],
    "answer": "문장 커버리지",
    "explanation": "문장 실행 여부를 측정하며 모든 분기 결과를 보장하지는 않습니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q251",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n각 분기의 참과 거짓 결과를 최소 한 번씩 수행하는 커버리지는?",
    "choices": [
      "ISP",
      "분기 커버리지",
      "DIP",
      "공통 결합도"
    ],
    "answer": "분기 커버리지",
    "explanation": "결정 결과의 각 경로가 실행되는지 확인합니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q252",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n모듈들을 결합하며 모듈 사이 인터페이스의 결함을 찾는 테스트는?",
    "choices": [
      "내용 결합도",
      "제어 결합도",
      "통합 테스트",
      "스탬프 결합도"
    ],
    "answer": "통합 테스트",
    "explanation": "개별 단위 검증 이후 연결된 모듈 간의 상호작용을 검사합니다.",
    "source": 2,
    "page": 9
  },
  {
    "id": "q253",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n사용자가 개발자의 통제된 환경에서 수행하는 인수 테스트는?",
    "choices": [
      "기능적 응집도",
      "순차적 응집도",
      "통신적 응집도",
      "알파 테스트"
    ],
    "answer": "알파 테스트",
    "explanation": "알파 테스트는 개발자와 함께 통제된 환경에서 수행합니다.",
    "source": 2,
    "page": 9
  },
  {
    "id": "q254",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n실제 사용자가 자신의 사용 환경에서 제품을 사용하며 검증하는 인수 테스트는?",
    "choices": [
      "베타 테스트",
      "메멘토",
      "전략",
      "상태"
    ],
    "answer": "베타 테스트",
    "explanation": "베타 테스트는 실제 환경에서 사용자가 수행합니다.",
    "source": 2,
    "page": 9
  },
  {
    "id": "q255",
    "category": "소프트웨어",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n소프트웨어 변경 사항을 식별·통제·감사하고 상태를 기록하는 관리 활동은?",
    "choices": [
      "반복자",
      "형상 관리",
      "중재자",
      "커맨드"
    ],
    "answer": "형상 관리",
    "explanation": "버전 및 변경 이력을 추적하고 기준선을 관리합니다.",
    "source": 2,
    "page": 9
  },
  {
    "id": "q256",
    "category": "데이터베이스",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n사용자마다 필요로 하는 데이터의 논리적 관점을 나타내는 스키마는?",
    "choices": [
      "참조 무결성",
      "삭제 이상",
      "외부 스키마",
      "갱신 이상"
    ],
    "answer": "외부 스키마",
    "explanation": "하나의 데이터베이스에 사용자별 외부 스키마가 여러 개 있을 수 있습니다.",
    "source": 2,
    "page": 10
  },
  {
    "id": "q257",
    "category": "데이터베이스",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n데이터베이스 전체의 논리적 구조와 제약을 정의하는 스키마는?",
    "choices": [
      "셀렉션",
      "프로젝션",
      "CREATE",
      "개념 스키마"
    ],
    "answer": "개념 스키마",
    "explanation": "조직 전체의 통합된 논리적 데이터 구조를 정의합니다.",
    "source": 2,
    "page": 10
  },
  {
    "id": "q258",
    "category": "데이터베이스",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n파일 구성과 저장 방식 등 데이터의 물리적 저장 구조를 정의하는 스키마는?",
    "choices": [
      "내부 스키마",
      "ALTER",
      "DROP",
      "REVOKE"
    ],
    "answer": "내부 스키마",
    "explanation": "내부 스키마는 물리적인 저장장치에서의 구현을 나타냅니다.",
    "source": 2,
    "page": 10
  },
  {
    "id": "q259",
    "category": "데이터베이스",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n튜플을 유일하게 식별하는 속성 집합 중 최소성을 만족하는 키는?",
    "choices": [
      "ROLLBACK",
      "후보키",
      "DESC",
      "IS NULL"
    ],
    "answer": "후보키",
    "explanation": "후보키는 유일성과 최소성을 모두 만족합니다.",
    "source": 2,
    "page": 10
  },
  {
    "id": "q260",
    "category": "데이터베이스",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n튜플을 유일하게 식별하지만 불필요한 속성을 포함할 수도 있는 키는?",
    "choices": [
      "UNION ALL",
      "함께 삭제된다",
      "슈퍼키",
      "외부 스키마"
    ],
    "answer": "슈퍼키",
    "explanation": "슈퍼키는 유일성을 만족하며 최소성은 요구하지 않습니다.",
    "source": 2,
    "page": 10
  },
  {
    "id": "q261",
    "category": "데이터베이스",
    "type": "choice",
    "prompt": "알맞은 용어를 고르세요.\n후보키 중 기본키로 선택되지 않은 나머지 키는?",
    "choices": [
      "개념 스키마",
      "내부 스키마",
      "후보키",
      "대체키"
    ],
    "answer": "대체키",
    "explanation": "기본키를 제외한 후보키를 대체키라고 합니다.",
    "source": 2,
    "page": 10
  },
  {
    "id": "q262",
    "category": "계산",
    "type": "short",
    "prompt": "빈 페이지 프레임 3개에서 FIFO 페이지 교체를 사용한다. 참조열 1, 2, 3, 1, 4, 2, 5, 1의 페이지 부재 횟수는?",
    "answer": "6",
    "aliases": [
      "6"
    ],
    "explanation": "1: 부재 / 2: 부재 / 3: 부재 / 1: 적중 / 4: 부재 / 2: 적중 / 5: 부재 / 1: 부재. 총 6회입니다.",
    "source": 3,
    "page": 7
  },
  {
    "id": "q263",
    "category": "계산",
    "type": "short",
    "prompt": "빈 페이지 프레임 3개에서 LRU 페이지 교체를 사용한다. 참조열 1, 2, 3, 1, 4, 2, 5, 1의 페이지 부재 횟수는?",
    "answer": "7",
    "aliases": [
      "7"
    ],
    "explanation": "1: 부재 / 2: 부재 / 3: 부재 / 1: 적중 / 4: 부재 / 2: 부재 / 5: 부재 / 1: 부재. 총 7회입니다.",
    "source": 3,
    "page": 7
  },
  {
    "id": "q264",
    "category": "계산",
    "type": "short",
    "prompt": "빈 페이지 프레임 3개에서 FIFO 페이지 교체를 사용한다. 참조열 2, 1, 2, 3, 4, 1, 2, 5의 페이지 부재 횟수는?",
    "answer": "6",
    "aliases": [
      "6"
    ],
    "explanation": "2: 부재 / 1: 부재 / 2: 적중 / 3: 부재 / 4: 부재 / 1: 적중 / 2: 부재 / 5: 부재. 총 6회입니다.",
    "source": 3,
    "page": 7
  },
  {
    "id": "q265",
    "category": "계산",
    "type": "short",
    "prompt": "빈 페이지 프레임 3개에서 LRU 페이지 교체를 사용한다. 참조열 2, 1, 2, 3, 4, 1, 2, 5의 페이지 부재 횟수는?",
    "answer": "7",
    "aliases": [
      "7"
    ],
    "explanation": "2: 부재 / 1: 부재 / 2: 적중 / 3: 부재 / 4: 부재 / 1: 부재 / 2: 부재 / 5: 부재. 총 7회입니다.",
    "source": 3,
    "page": 7
  },
  {
    "id": "q266",
    "category": "계산",
    "type": "short",
    "prompt": "빈 페이지 프레임 4개에서 FIFO 페이지 교체를 사용한다. 참조열 1, 2, 3, 4, 1, 5, 2, 6의 페이지 부재 횟수는?",
    "answer": "6",
    "aliases": [
      "6"
    ],
    "explanation": "1: 부재 / 2: 부재 / 3: 부재 / 4: 부재 / 1: 적중 / 5: 부재 / 2: 적중 / 6: 부재. 총 6회입니다.",
    "source": 3,
    "page": 7
  },
  {
    "id": "q267",
    "category": "계산",
    "type": "short",
    "prompt": "빈 페이지 프레임 4개에서 LRU 페이지 교체를 사용한다. 참조열 1, 2, 3, 4, 1, 5, 2, 6의 페이지 부재 횟수는?",
    "answer": "7",
    "aliases": [
      "7"
    ],
    "explanation": "1: 부재 / 2: 부재 / 3: 부재 / 4: 부재 / 1: 적중 / 5: 부재 / 2: 부재 / 6: 부재. 총 7회입니다.",
    "source": 3,
    "page": 7
  },
  {
    "id": "q268",
    "category": "계산",
    "type": "short",
    "prompt": "빈 페이지 프레임 2개에서 FIFO 페이지 교체를 사용한다. 참조열 1, 2, 1, 3, 2, 4, 1의 페이지 부재 횟수는?",
    "answer": "5",
    "aliases": [
      "5"
    ],
    "explanation": "1: 부재 / 2: 부재 / 1: 적중 / 3: 부재 / 2: 적중 / 4: 부재 / 1: 부재. 총 5회입니다.",
    "source": 3,
    "page": 7
  },
  {
    "id": "q269",
    "category": "계산",
    "type": "short",
    "prompt": "빈 페이지 프레임 2개에서 LRU 페이지 교체를 사용한다. 참조열 1, 2, 1, 3, 2, 4, 1의 페이지 부재 횟수는?",
    "answer": "6",
    "aliases": [
      "6"
    ],
    "explanation": "1: 부재 / 2: 부재 / 1: 적중 / 3: 부재 / 2: 부재 / 4: 부재 / 1: 부재. 총 6회입니다.",
    "source": 3,
    "page": 7
  },
  {
    "id": "q270",
    "category": "계산",
    "type": "short",
    "prompt": "빈 페이지 프레임 3개에서 FIFO 페이지 교체를 사용한다. 참조열 4, 3, 2, 4, 1, 2, 5, 3의 페이지 부재 횟수는?",
    "answer": "6",
    "aliases": [
      "6"
    ],
    "explanation": "4: 부재 / 3: 부재 / 2: 부재 / 4: 적중 / 1: 부재 / 2: 적중 / 5: 부재 / 3: 부재. 총 6회입니다.",
    "source": 3,
    "page": 7
  },
  {
    "id": "q271",
    "category": "계산",
    "type": "short",
    "prompt": "빈 페이지 프레임 3개에서 LRU 페이지 교체를 사용한다. 참조열 4, 3, 2, 4, 1, 2, 5, 3의 페이지 부재 횟수는?",
    "answer": "6",
    "aliases": [
      "6"
    ],
    "explanation": "4: 부재 / 3: 부재 / 2: 부재 / 4: 적중 / 1: 부재 / 2: 적중 / 5: 부재 / 3: 부재. 총 6회입니다.",
    "source": 3,
    "page": 7
  },
  {
    "id": "q272",
    "category": "계산",
    "type": "short",
    "prompt": "HRN 스케줄링에서 대기 시간 12, 실행 시간 4인 프로세스의 우선순위(응답 비율)는?",
    "answer": "4",
    "aliases": [
      "4"
    ],
    "explanation": "(대기 시간 + 실행 시간) ÷ 실행 시간 = (12 + 4) ÷ 4 = 4.",
    "source": 2,
    "page": 26
  },
  {
    "id": "q273",
    "category": "계산",
    "type": "short",
    "prompt": "HRN 스케줄링에서 대기 시간 18, 실행 시간 6인 프로세스의 우선순위(응답 비율)는?",
    "answer": "4",
    "aliases": [
      "4"
    ],
    "explanation": "(대기 시간 + 실행 시간) ÷ 실행 시간 = (18 + 6) ÷ 6 = 4.",
    "source": 2,
    "page": 26
  },
  {
    "id": "q274",
    "category": "계산",
    "type": "short",
    "prompt": "HRN 스케줄링에서 대기 시간 8, 실행 시간 2인 프로세스의 우선순위(응답 비율)는?",
    "answer": "5",
    "aliases": [
      "5"
    ],
    "explanation": "(대기 시간 + 실행 시간) ÷ 실행 시간 = (8 + 2) ÷ 2 = 5.",
    "source": 2,
    "page": 26
  },
  {
    "id": "q275",
    "category": "계산",
    "type": "short",
    "prompt": "HRN 스케줄링에서 대기 시간 15, 실행 시간 5인 프로세스의 우선순위(응답 비율)는?",
    "answer": "4",
    "aliases": [
      "4"
    ],
    "explanation": "(대기 시간 + 실행 시간) ÷ 실행 시간 = (15 + 5) ÷ 5 = 4.",
    "source": 2,
    "page": 26
  },
  {
    "id": "q276",
    "category": "계산",
    "type": "short",
    "prompt": "HRN 스케줄링에서 대기 시간 24, 실행 시간 8인 프로세스의 우선순위(응답 비율)는?",
    "answer": "4",
    "aliases": [
      "4"
    ],
    "explanation": "(대기 시간 + 실행 시간) ÷ 실행 시간 = (24 + 8) ÷ 8 = 4.",
    "source": 2,
    "page": 26
  },
  {
    "id": "q277",
    "category": "계산",
    "type": "short",
    "prompt": "A, B, C가 시각 0에 이 순서로 준비 큐에 들어왔다. 실행 시간은 각각 4, 6, 2ms이다. FCFS의 평균 대기 시간은? (단위 제외, 필요하면 소수점 둘째 자리까지)",
    "answer": "4.67",
    "aliases": [
      "4.67"
    ],
    "explanation": "대기 시간은 A=0, B=4, C=10ms입니다. 평균 = 14 ÷ 3 = 4.67ms.",
    "source": 2,
    "page": 26
  },
  {
    "id": "q278",
    "category": "계산",
    "type": "short",
    "prompt": "A, B, C가 시각 0에 이 순서로 준비 큐에 들어왔다. 실행 시간은 각각 3, 5, 7ms이다. FCFS의 평균 대기 시간은? (단위 제외, 필요하면 소수점 둘째 자리까지)",
    "answer": "3.67",
    "aliases": [
      "3.67"
    ],
    "explanation": "대기 시간은 A=0, B=3, C=8ms입니다. 평균 = 11 ÷ 3 = 3.67ms.",
    "source": 2,
    "page": 26
  },
  {
    "id": "q279",
    "category": "계산",
    "type": "short",
    "prompt": "A, B, C가 시각 0에 이 순서로 준비 큐에 들어왔다. 실행 시간은 각각 6, 3, 9ms이다. FCFS의 평균 대기 시간은? (단위 제외, 필요하면 소수점 둘째 자리까지)",
    "answer": "5.0",
    "aliases": [
      "5.0"
    ],
    "explanation": "대기 시간은 A=0, B=6, C=9ms입니다. 평균 = 15 ÷ 3 = 5.0ms.",
    "source": 2,
    "page": 26
  },
  {
    "id": "q280",
    "category": "계산",
    "type": "short",
    "prompt": "A, B, C가 시각 0에 이 순서로 준비 큐에 들어왔다. 실행 시간은 각각 2, 8, 5ms이다. FCFS의 평균 대기 시간은? (단위 제외, 필요하면 소수점 둘째 자리까지)",
    "answer": "4.0",
    "aliases": [
      "4.0"
    ],
    "explanation": "대기 시간은 A=0, B=2, C=10ms입니다. 평균 = 12 ÷ 3 = 4.0ms.",
    "source": 2,
    "page": 26
  },
  {
    "id": "q281",
    "category": "계산",
    "type": "short",
    "prompt": "A, B, C가 시각 0에 이 순서로 준비 큐에 들어왔다. 실행 시간은 각각 5, 4, 3ms이다. FCFS의 평균 대기 시간은? (단위 제외, 필요하면 소수점 둘째 자리까지)",
    "answer": "4.67",
    "aliases": [
      "4.67"
    ],
    "explanation": "대기 시간은 A=0, B=5, C=9ms입니다. 평균 = 14 ÷ 3 = 4.67ms.",
    "source": 2,
    "page": 26
  },
  {
    "id": "q282",
    "category": "계산",
    "type": "short",
    "prompt": "연결된 하나의 제어 흐름 그래프에 노드 3개, 간선 8개가 있다. McCabe 순환 복잡도 V(G)는?",
    "answer": "7",
    "aliases": [
      "7"
    ],
    "explanation": "연결된 그래프의 순환 복잡도 V(G) = 간선 − 노드 + 2 = 8 − 3 + 2 = 7.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q283",
    "category": "계산",
    "type": "short",
    "prompt": "연결된 하나의 제어 흐름 그래프에 노드 5개, 간선 11개가 있다. McCabe 순환 복잡도 V(G)는?",
    "answer": "8",
    "aliases": [
      "8"
    ],
    "explanation": "연결된 그래프의 순환 복잡도 V(G) = 간선 − 노드 + 2 = 11 − 5 + 2 = 8.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q284",
    "category": "계산",
    "type": "short",
    "prompt": "연결된 하나의 제어 흐름 그래프에 노드 2개, 간선 7개가 있다. McCabe 순환 복잡도 V(G)는?",
    "answer": "7",
    "aliases": [
      "7"
    ],
    "explanation": "연결된 그래프의 순환 복잡도 V(G) = 간선 − 노드 + 2 = 7 − 2 + 2 = 7.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q285",
    "category": "계산",
    "type": "short",
    "prompt": "연결된 하나의 제어 흐름 그래프에 노드 8개, 간선 15개가 있다. McCabe 순환 복잡도 V(G)는?",
    "answer": "9",
    "aliases": [
      "9"
    ],
    "explanation": "연결된 그래프의 순환 복잡도 V(G) = 간선 − 노드 + 2 = 15 − 8 + 2 = 9.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q286",
    "category": "계산",
    "type": "short",
    "prompt": "연결된 하나의 제어 흐름 그래프에 노드 4개, 간선 12개가 있다. McCabe 순환 복잡도 V(G)는?",
    "answer": "10",
    "aliases": [
      "10"
    ],
    "explanation": "연결된 그래프의 순환 복잡도 V(G) = 간선 − 노드 + 2 = 12 − 4 + 2 = 10.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q287",
    "category": "계산",
    "type": "short",
    "prompt": "배열 6, 2, 8, 4을 오름차순 선택 정렬한다. 전체에서 최솟값을 찾아 첫 원소와 교환한 1회전 결과는? (쉼표로 구분)",
    "answer": "2, 6, 8, 4",
    "aliases": [
      "2, 6, 8, 4"
    ],
    "explanation": "가장 작은 값의 위치를 찾은 뒤 첫 번째 원소와 한 번 교환합니다.",
    "source": 3,
    "page": 3
  },
  {
    "id": "q288",
    "category": "계산",
    "type": "short",
    "prompt": "배열 9, 1, 7, 3을 오름차순 선택 정렬한다. 전체에서 최솟값을 찾아 첫 원소와 교환한 1회전 결과는? (쉼표로 구분)",
    "answer": "1, 9, 7, 3",
    "aliases": [
      "1, 9, 7, 3"
    ],
    "explanation": "가장 작은 값의 위치를 찾은 뒤 첫 번째 원소와 한 번 교환합니다.",
    "source": 3,
    "page": 3
  },
  {
    "id": "q289",
    "category": "계산",
    "type": "short",
    "prompt": "배열 5, 8, 2, 6을 오름차순 선택 정렬한다. 전체에서 최솟값을 찾아 첫 원소와 교환한 1회전 결과는? (쉼표로 구분)",
    "answer": "2, 8, 5, 6",
    "aliases": [
      "2, 8, 5, 6"
    ],
    "explanation": "가장 작은 값의 위치를 찾은 뒤 첫 번째 원소와 한 번 교환합니다.",
    "source": 3,
    "page": 3
  },
  {
    "id": "q290",
    "category": "계산",
    "type": "short",
    "prompt": "배열 7, 4, 9, 1을 오름차순 선택 정렬한다. 전체에서 최솟값을 찾아 첫 원소와 교환한 1회전 결과는? (쉼표로 구분)",
    "answer": "1, 4, 9, 7",
    "aliases": [
      "1, 4, 9, 7"
    ],
    "explanation": "가장 작은 값의 위치를 찾은 뒤 첫 번째 원소와 한 번 교환합니다.",
    "source": 3,
    "page": 3
  },
  {
    "id": "q291",
    "category": "계산",
    "type": "short",
    "prompt": "배열 8, 3, 6, 2을 오름차순 선택 정렬한다. 전체에서 최솟값을 찾아 첫 원소와 교환한 1회전 결과는? (쉼표로 구분)",
    "answer": "2, 3, 6, 8",
    "aliases": [
      "2, 3, 6, 8"
    ],
    "explanation": "가장 작은 값의 위치를 찾은 뒤 첫 번째 원소와 한 번 교환합니다.",
    "source": 3,
    "page": 3
  },
  {
    "id": "q292",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "T의 열 v에는 순서대로 10, NULL, 30, 10가 들어 있다. SELECT COUNT(*) FROM T; 의 결과는?",
    "answer": "4",
    "aliases": [
      "4"
    ],
    "explanation": "COUNT(*)는 모든 행을 셉니다. 따라서 4입니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q293",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "T의 열 v에는 순서대로 10, NULL, 30, 10가 들어 있다. SELECT COUNT(v) FROM T; 의 결과는?",
    "answer": "3",
    "aliases": [
      "3"
    ],
    "explanation": "COUNT(v)는 NULL이 아닌 값만 셉니다. 따라서 3입니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q294",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "T의 열 v에는 순서대로 10, NULL, 30, 10가 들어 있다. SELECT COUNT(DISTINCT v) FROM T; 의 결과는?",
    "answer": "2",
    "aliases": [
      "2"
    ],
    "explanation": "COUNT(DISTINCT v)는 NULL을 제외하고 중복을 제거한 값의 수를 셉니다. 따라서 2입니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q295",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "T의 열 v에는 순서대로 NULL, 5, 5, 15, NULL가 들어 있다. SELECT COUNT(*) FROM T; 의 결과는?",
    "answer": "5",
    "aliases": [
      "5"
    ],
    "explanation": "COUNT(*)는 모든 행을 셉니다. 따라서 5입니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q296",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "T의 열 v에는 순서대로 NULL, 5, 5, 15, NULL가 들어 있다. SELECT COUNT(v) FROM T; 의 결과는?",
    "answer": "3",
    "aliases": [
      "3"
    ],
    "explanation": "COUNT(v)는 NULL이 아닌 값만 셉니다. 따라서 3입니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q297",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "T의 열 v에는 순서대로 NULL, 5, 5, 15, NULL가 들어 있다. SELECT COUNT(DISTINCT v) FROM T; 의 결과는?",
    "answer": "2",
    "aliases": [
      "2"
    ],
    "explanation": "COUNT(DISTINCT v)는 NULL을 제외하고 중복을 제거한 값의 수를 셉니다. 따라서 2입니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q298",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "T의 열 v에는 순서대로 2, 4, 6, 8가 들어 있다. SELECT COUNT(*) FROM T; 의 결과는?",
    "answer": "4",
    "aliases": [
      "4"
    ],
    "explanation": "COUNT(*)는 모든 행을 셉니다. 따라서 4입니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q299",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "T의 열 v에는 순서대로 2, 4, 6, 8가 들어 있다. SELECT COUNT(v) FROM T; 의 결과는?",
    "answer": "4",
    "aliases": [
      "4"
    ],
    "explanation": "COUNT(v)는 NULL이 아닌 값만 셉니다. 따라서 4입니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q300",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "T의 열 v에는 순서대로 2, 4, 6, 8가 들어 있다. SELECT COUNT(DISTINCT v) FROM T; 의 결과는?",
    "answer": "4",
    "aliases": [
      "4"
    ],
    "explanation": "COUNT(DISTINCT v)는 NULL을 제외하고 중복을 제거한 값의 수를 셉니다. 따라서 4입니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q301",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "T의 열 v에는 순서대로 NULL, NULL, 7가 들어 있다. SELECT COUNT(*) FROM T; 의 결과는?",
    "answer": "3",
    "aliases": [
      "3"
    ],
    "explanation": "COUNT(*)는 모든 행을 셉니다. 따라서 3입니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q302",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "T의 열 v에는 순서대로 NULL, NULL, 7가 들어 있다. SELECT COUNT(v) FROM T; 의 결과는?",
    "answer": "1",
    "aliases": [
      "1"
    ],
    "explanation": "COUNT(v)는 NULL이 아닌 값만 셉니다. 따라서 1입니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q303",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "T의 열 v에는 순서대로 NULL, NULL, 7가 들어 있다. SELECT COUNT(DISTINCT v) FROM T; 의 결과는?",
    "answer": "1",
    "aliases": [
      "1"
    ],
    "explanation": "COUNT(DISTINCT v)는 NULL을 제외하고 중복을 제거한 값의 수를 셉니다. 따라서 1입니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q304",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "T의 열 v에는 순서대로 1, 1, 1, 2, 2가 들어 있다. SELECT COUNT(*) FROM T; 의 결과는?",
    "answer": "5",
    "aliases": [
      "5"
    ],
    "explanation": "COUNT(*)는 모든 행을 셉니다. 따라서 5입니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q305",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "T의 열 v에는 순서대로 1, 1, 1, 2, 2가 들어 있다. SELECT COUNT(v) FROM T; 의 결과는?",
    "answer": "5",
    "aliases": [
      "5"
    ],
    "explanation": "COUNT(v)는 NULL이 아닌 값만 셉니다. 따라서 5입니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q306",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "T의 열 v에는 순서대로 1, 1, 1, 2, 2가 들어 있다. SELECT COUNT(DISTINCT v) FROM T; 의 결과는?",
    "answer": "2",
    "aliases": [
      "2"
    ],
    "explanation": "COUNT(DISTINCT v)는 NULL을 제외하고 중복을 제거한 값의 수를 셉니다. 따라서 2입니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q307",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 코드의 출력 결과는?\n\n[Python]\ns = \"SECURITY\"\nprint(s[::-1])",
    "answer": "YTIRUCES",
    "aliases": [
      "YTIRUCES"
    ],
    "explanation": "음수 증가값으로 문자열을 뒤에서부터 읽습니다.",
    "source": 1,
    "page": 97
  },
  {
    "id": "q308",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 코드의 출력 결과는?\n\n[Python]\na = [2, 5, 8, 11, 14]\nprint(a[-2])",
    "answer": "11",
    "aliases": [
      "11"
    ],
    "explanation": "음수 인덱스 -1은 마지막 원소, -2는 뒤에서 두 번째 원소입니다.",
    "source": 1,
    "page": 97
  },
  {
    "id": "q309",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 코드의 출력 결과는?\n\n[Python]\na = [1, 2, 3]\nb = a\nb[0] = 9\nprint(a)",
    "answer": "[9, 2, 3]",
    "aliases": [
      "[9, 2, 3]"
    ],
    "explanation": "a와 b가 같은 리스트 객체를 참조하므로 b를 통한 변경이 a에도 보입니다.",
    "source": 1,
    "page": 92
  },
  {
    "id": "q310",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 코드의 출력 결과는?\n\n[Python]\na = [1, 2, 3]\nb = a[:]\nb[0] = 9\nprint(a)",
    "answer": "[1, 2, 3]",
    "aliases": [
      "[1, 2, 3]"
    ],
    "explanation": "슬라이스 a[:]는 새 리스트를 만듭니다. 정수 원소로 이루어진 이 예에서 b의 변경은 a에 영향을 주지 않습니다.",
    "source": 1,
    "page": 97
  },
  {
    "id": "q311",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 코드의 출력 결과는?\n\n[Python]\ntotal = 0\nfor i in range(1, 8):\n    if i % 2 == 0:\n        total += i\nprint(total)",
    "answer": "12",
    "aliases": [
      "12"
    ],
    "explanation": "1부터 7까지의 짝수 2, 4, 6을 더합니다.",
    "source": 1,
    "page": 96
  },
  {
    "id": "q312",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 코드의 출력 결과는?\n\n[Python]\na = {2, 4, 6}\nb = {4, 6, 8}\nprint(len(a & b))",
    "answer": "2",
    "aliases": [
      "2"
    ],
    "explanation": "교집합은 {4, 6}이므로 원소 수는 2입니다.",
    "source": 1,
    "page": 93
  },
  {
    "id": "q313",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 코드의 출력 결과는?\n\n[Python]\na = {2, 4, 6}\nb = {4, 6, 8}\nprint(len(a | b))",
    "answer": "4",
    "aliases": [
      "4"
    ],
    "explanation": "합집합은 {2, 4, 6, 8}로 중복이 제거됩니다.",
    "source": 1,
    "page": 93
  },
  {
    "id": "q314",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 코드의 출력 결과는?\n\n[Python]\nprint(17 // 5, 17 % 5)",
    "answer": "3 2",
    "aliases": [
      "3 2"
    ],
    "explanation": "정수 나눗셈의 몫은 3, 나머지는 2입니다.",
    "source": 1,
    "page": 96
  },
  {
    "id": "q315",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 코드의 출력 결과는?\n\n[Python]\nprint(3 - 11)",
    "answer": "-8",
    "aliases": [
      "-8"
    ],
    "explanation": "3에서 11을 빼므로 결과는 음수 -8입니다.",
    "source": 1,
    "page": 96
  },
  {
    "id": "q316",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 코드의 출력 결과는?\n\n[Python]\nprint(3 / 2)",
    "answer": "1.5",
    "aliases": [
      "1.5"
    ],
    "explanation": "Python의 / 연산은 실수 나눗셈입니다.",
    "source": 1,
    "page": 96
  },
  {
    "id": "q317",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 코드의 출력 결과는?\n\n[Python]\na = [3, 6]\na.extend([9, 12])\nprint(len(a))",
    "answer": "4",
    "aliases": [
      "4"
    ],
    "explanation": "extend는 전달된 반복 가능한 객체의 원소들을 리스트에 추가합니다.",
    "source": 1,
    "page": 92
  },
  {
    "id": "q318",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 코드의 출력 결과는?\n\n[Python]\ndef f(n):\n    if n == 0:\n        return 0\n    return n + f(n - 1)\nprint(f(4))",
    "answer": "10",
    "aliases": [
      "10"
    ],
    "explanation": "4 + 3 + 2 + 1 + 0을 재귀적으로 계산합니다.",
    "source": 1,
    "page": 96
  },
  {
    "id": "q319",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 코드의 출력 결과는?\n\n[Java]\nclass Main {\n  public static void main(String[] args) {\n    int x = 5;\n    System.out.print(x++ + ++x);\n  }\n}",
    "answer": "12",
    "aliases": [
      "12"
    ],
    "explanation": "왼쪽 피연산자의 x++는 5를 반환한 후 x를 6으로 만듭니다. ++x는 7을 반환하므로 합은 12입니다.",
    "source": 1,
    "page": 85
  },
  {
    "id": "q320",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 코드의 출력 결과는?\n\n[Java]\nclass Main {\n  public static void main(String[] args) {\n    int sum = 0;\n    for (int i = 1; i <= 5; i++) {\n      if (i == 3) continue;\n      sum += i;\n    }\n    System.out.print(sum);\n  }\n}",
    "answer": "12",
    "aliases": [
      "12"
    ],
    "explanation": "continue로 3을 건너뛰므로 1 + 2 + 4 + 5 = 12입니다.",
    "source": 1,
    "page": 85
  },
  {
    "id": "q321",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 코드의 출력 결과는?\n\n[Java]\nclass Main {\n  public static void main(String[] args) {\n    int[] a = {2, 4, 6};\n    int[] b = a;\n    b[1] = 9;\n    System.out.print(a[1]);\n  }\n}",
    "answer": "9",
    "aliases": [
      "9"
    ],
    "explanation": "a와 b는 같은 배열 객체를 참조합니다.",
    "source": 1,
    "page": 85
  },
  {
    "id": "q322",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "다음 코드의 출력 결과는?\n\n[Java]\nclass Parent { int value() { return 2; } }\nclass Child extends Parent { int value() { return 7; } }\nclass Main {\n  public static void main(String[] args) {\n    Parent p = new Child();\n    System.out.print(p.value());\n  }\n}",
    "answer": "7",
    "aliases": [
      "7"
    ],
    "explanation": "인스턴스 메서드는 실제 객체의 타입에 따라 호출되므로 Child의 오버라이딩 메서드가 실행됩니다.",
    "source": 1,
    "page": 90
  },
  {
    "id": "q323",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "stdio.h를 포함한 main 함수 안에서 다음 C 코드를 실행했다. 출력 결과는?\n\n[C]\nint a = 5, b = 3;\nprintf(\"%d\", a & b);",
    "answer": "1",
    "aliases": [
      "1"
    ],
    "explanation": "5는 이진수 101, 3은 011이며 비트 AND 결과는 001입니다.",
    "source": 1,
    "page": 71
  },
  {
    "id": "q324",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "stdio.h를 포함한 main 함수 안에서 다음 C 코드를 실행했다. 출력 결과는?\n\n[C]\nint a = 5, b = 3;\nprintf(\"%d\", a | b);",
    "answer": "7",
    "aliases": [
      "7"
    ],
    "explanation": "101과 011의 비트 OR 결과는 111, 즉 7입니다.",
    "source": 1,
    "page": 71
  },
  {
    "id": "q325",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "stdio.h를 포함한 main 함수 안에서 다음 C 코드를 실행했다. 출력 결과는?\n\n[C]\nint a = 5, b = 3;\nprintf(\"%d\", a ^ b);",
    "answer": "6",
    "aliases": [
      "6"
    ],
    "explanation": "비트가 서로 다를 때만 1이므로 XOR 결과는 110, 즉 6입니다.",
    "source": 1,
    "page": 71
  },
  {
    "id": "q326",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "stdio.h를 포함한 main 함수 안에서 다음 C 코드를 실행했다. 출력 결과는?\n\n[C]\nint a = 3;\nprintf(\"%d\", a << 2);",
    "answer": "12",
    "aliases": [
      "12"
    ],
    "explanation": "양의 정수 3을 두 비트 왼쪽 이동하면 12입니다.",
    "source": 1,
    "page": 71
  },
  {
    "id": "q327",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "stdio.h를 포함한 main 함수 안에서 다음 C 코드를 실행했다. 출력 결과는?\n\n[C]\nint a = 9, b = 4;\nprintf(\"%d\", a / b);",
    "answer": "2",
    "aliases": [
      "2"
    ],
    "explanation": "정수 피연산자끼리 나누므로 소수 부분이 버려집니다.",
    "source": 1,
    "page": 71
  },
  {
    "id": "q328",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "stdio.h를 포함한 main 함수 안에서 다음 C 코드를 실행했다. 출력 결과는?\n\n[C]\nint a = 0, b = 3;\nprintf(\"%d\", a || b);",
    "answer": "1",
    "aliases": [
      "1"
    ],
    "explanation": "논리 OR은 하나라도 0이 아니면 정수 1을 반환합니다.",
    "source": 1,
    "page": 71
  },
  {
    "id": "q329",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "stdio.h를 포함한 main 함수 안에서 다음 C 코드를 실행했다. 출력 결과는?\n\n[C]\nint x = 4;\nint *p = &x;\n*p *= 3;\nprintf(\"%d\", x);",
    "answer": "12",
    "aliases": [
      "12"
    ],
    "explanation": "p가 가리키는 x의 값이 4 × 3으로 바뀝니다.",
    "source": 1,
    "page": 77
  },
  {
    "id": "q330",
    "category": "프로그래밍",
    "type": "short",
    "prompt": "stdio.h를 포함한 main 함수 안에서 다음 C 코드를 실행했다. 출력 결과는?\n\n[C]\nint a[] = {2, 5, 8};\nint *p = a;\nprintf(\"%d\", *(p + 2));",
    "answer": "8",
    "aliases": [
      "8"
    ],
    "explanation": "p + 2는 배열의 인덱스 2를 가리키므로 값은 8입니다.",
    "source": 1,
    "page": 77
  }
];
const SOURCES = [
  {
    "id": "source-1",
    "name": "2026_정보처리기사_실기_기출문제집_핵심요약(20260223).pdf",
    "pages": 119
  },
  {
    "id": "source-2",
    "name": "[꿈꾸는라이언] 정보처리기사 실기 요약노트 (이론편).pdf",
    "pages": 27
  },
  {
    "id": "source-3",
    "name": "정보처리기사필기_01_필수계산41문제.pdf",
    "pages": 22
  },
  {
    "id": "source-4",
    "name": "정보처리기사필기_03_잘못된문장찾기197문제 2.pdf",
    "pages": 45
  },
  {
    "id": "source-5",
    "name": "정보처리기사필기_04_키워드찾기259문제 2.pdf",
    "pages": 43
  }
];
