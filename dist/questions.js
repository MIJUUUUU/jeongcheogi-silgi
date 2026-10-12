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
