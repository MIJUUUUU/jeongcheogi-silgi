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
    "page": 7,
    "examEvidence": {
      "source": 1,
      "page": 36,
      "dates": [
        "2024.7",
        "2021.7"
      ],
      "topic": "응집도",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-cohesion"
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
    "page": 7,
    "examEvidence": {
      "source": 1,
      "page": 36,
      "dates": [
        "2025.4",
        "2024.7",
        "2021.10",
        "2021.4"
      ],
      "topic": "결합도",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-coupling"
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
    "page": 7,
    "topic": "pattern",
    "concept": "singleton",
    "exercise": "description",
    "patternGroup": "생성"
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
    "page": 7,
    "topic": "pattern",
    "concept": "adapter",
    "exercise": "description",
    "patternGroup": "구조",
    "examEvidence": {
      "source": 1,
      "page": 39,
      "dates": [
        "2025.4"
      ],
      "topic": "어댑터",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-pattern-adapter"
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
    "page": 7,
    "topic": "pattern",
    "concept": "observer",
    "exercise": "description",
    "patternGroup": "행위",
    "examEvidence": {
      "source": 1,
      "page": 41,
      "dates": [
        "2022.10",
        "2020.7"
      ],
      "topic": "옵서버",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-pattern-observer"
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
    "page": 10,
    "examEvidence": {
      "source": 1,
      "page": 26,
      "dates": [
        "2021.7",
        "2020.5"
      ],
      "topic": "트랜잭션 특성",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-transaction"
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
    "page": 10,
    "examEvidence": {
      "source": 1,
      "page": 26,
      "dates": [
        "2021.7",
        "2020.5"
      ],
      "topic": "트랜잭션 특성",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-transaction"
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
    "page": 10,
    "examEvidence": {
      "source": 1,
      "page": 26,
      "dates": [
        "2021.7",
        "2020.5"
      ],
      "topic": "트랜잭션 특성",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-transaction"
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
    "page": 10,
    "examEvidence": {
      "source": 1,
      "page": 26,
      "dates": [
        "2021.7",
        "2020.5"
      ],
      "topic": "트랜잭션 특성",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-transaction"
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
    "page": 11,
    "examEvidence": {
      "source": 1,
      "page": 22,
      "dates": [
        "2024.4",
        "2021.7"
      ],
      "topic": "정규화·함수 종속",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-normalization"
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
    "page": 11,
    "examEvidence": {
      "source": 1,
      "page": 22,
      "dates": [
        "2024.4",
        "2021.7"
      ],
      "topic": "정규화·함수 종속",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-normalization"
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
    "page": 11,
    "examEvidence": {
      "source": 1,
      "page": 22,
      "dates": [
        "2024.4",
        "2021.7"
      ],
      "topic": "정규화·함수 종속",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-normalization"
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
    "page": 11,
    "examEvidence": {
      "source": 1,
      "page": 22,
      "dates": [
        "2024.4",
        "2021.7"
      ],
      "topic": "정규화·함수 종속",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-normalization"
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
    "page": 23,
    "examEvidence": {
      "source": 1,
      "page": 61,
      "dates": [
        "2024.7",
        "2023.4",
        "2020.11",
        "2020.10"
      ],
      "topic": "GROUP BY·HAVING",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-group"
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
      "크로스 사이트 스크립팅",
      "Cross-Site Scripting",
      "XSS 공격",
      "Cross-Site Scripting Attack"
    ],
    "explanation": "Cross Site Scripting은 출력 시 적절한 이스케이프 등으로 예방합니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-xss",
    "exercise": "description",
    "patternGroup": "웹 공격"
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
      "SQL 주입",
      "SQL 삽입 공격",
      "SQL Injection Attack"
    ],
    "explanation": "매개변수화된 쿼리를 사용해 입력 데이터와 SQL 명령을 분리해야 합니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-sql-injection",
    "exercise": "description",
    "patternGroup": "웹 공격"
  },
  {
    "id": "q54",
    "category": "보안",
    "type": "short",
    "prompt": "여러 장치에서 동시에 트래픽을 보내 서비스를 마비시키는 분산 서비스 거부 공격의 약어는?",
    "answer": "DDoS",
    "aliases": [
      "DDoS",
      "Distributed Denial of Service",
      "DDoS 공격",
      "Distributed Denial of Service Attack",
      "분산 서비스 거부 공격"
    ],
    "explanation": "DDoS는 여러 공격원을 사용하여 대상 서비스의 가용성을 침해합니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-ddos",
    "exercise": "description",
    "patternGroup": "네트워크 공격"
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "blank",
    "prompt": "애자일의 핵심 가치를 완성하시오.\n계획을 따르는 것보다 (     )에 대응하는 것에 더 가치를 둔다.",
    "answer": "변화",
    "explanation": "애자일은 요구사항 변화에 유연하게 대응합니다.",
    "source": 4,
    "page": 1,
    "aliases": [
      "변화",
      "변경"
    ]
  },
  {
    "id": "q87",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "클래스의 속성·연산과 클래스 사이의 정적 관계를 표현하는 UML 다이어그램의 명칭을 쓰시오.",
    "answer": "클래스 다이어그램",
    "explanation": "클래스 다이어그램은 시스템의 정적 구조를 나타냅니다.",
    "source": 2,
    "page": 6,
    "aliases": [
      "클래스 다이어그램",
      "Class Diagram"
    ]
  },
  {
    "id": "q88",
    "category": "소프트웨어",
    "type": "blank",
    "prompt": "XP의 다섯 핵심 가치 중 빈칸에 해당하는 용어를 쓰시오.\n의사소통, 단순성, 용기, 피드백, (     )",
    "answer": "존중",
    "explanation": "XP의 핵심 가치는 의사소통, 단순성, 용기, 피드백, 존중입니다.",
    "source": 2,
    "page": 5,
    "aliases": [
      "존중",
      "Respect"
    ]
  },
  {
    "id": "q89",
    "category": "소프트웨어",
    "type": "blank",
    "prompt": "모듈 독립성을 높이는 설계 방향을 완성하시오.\n결합도는 (①), 응집도는 (②).\n①, ②를 순서대로 쓰시오.",
    "answer": "낮게, 높게",
    "explanation": "다른 모듈에 대한 의존은 낮추고 모듈 내부의 기능 관련성은 높입니다.",
    "source": 2,
    "page": 7,
    "aliases": [
      "낮게, 높게",
      "낮음, 높음",
      "낮추고, 높인다",
      "낮은, 높은"
    ]
  },
  {
    "id": "q90",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "입력값의 허용 범위 끝과 바로 주변 값을 집중적으로 검사하는 블랙박스 테스트 기법의 명칭을 쓰시오.",
    "answer": "경계값 분석",
    "explanation": "경계값과 그 직전·직후에서 발생하는 결함을 찾는 기법입니다.",
    "source": 2,
    "page": 8,
    "aliases": [
      "경계값 분석",
      "Boundary Value Analysis"
    ]
  },
  {
    "id": "q91",
    "category": "데이터베이스",
    "type": "blank",
    "prompt": "다음 SQL의 빈칸을 채우시오.\n(     ) SELECT ON Student TO learner;",
    "answer": "GRANT",
    "explanation": "GRANT는 사용자에게 접근 권한을 부여합니다.",
    "source": 2,
    "page": 22,
    "aliases": [
      "GRANT"
    ]
  },
  {
    "id": "q92",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "SQL에서 그룹화 이전에 개별 행에 조건을 적용하는 절의 명칭을 쓰시오.",
    "answer": "WHERE",
    "explanation": "WHERE로 행을 먼저 선택하고 GROUP BY로 그룹을 만든 뒤 HAVING으로 그룹을 제한합니다.",
    "source": 2,
    "page": 23,
    "aliases": [
      "WHERE"
    ]
  },
  {
    "id": "q93",
    "category": "운영체제",
    "type": "blank",
    "prompt": "교착 상태의 필요 조건을 완성하시오.\n상호 배제, 점유와 대기, 비선점, (     )",
    "answer": "순환 대기",
    "explanation": "프로세스들이 자원을 순환 관계로 기다리는 조건입니다.",
    "source": 2,
    "page": 14,
    "aliases": [
      "순환 대기",
      "Circular Wait"
    ]
  },
  {
    "id": "q94",
    "category": "네트워크",
    "type": "short",
    "prompt": "OSI 7계층에서 응용 계층 바로 아래에 위치하여 데이터 표현 방식과 암호화·압축을 담당하는 계층의 명칭을 쓰시오.",
    "answer": "표현 계층",
    "explanation": "표현 계층은 OSI 6계층입니다.",
    "source": 2,
    "page": 16,
    "aliases": [
      "표현 계층",
      "표현",
      "Presentation Layer"
    ]
  },
  {
    "id": "q95",
    "category": "보안",
    "type": "short",
    "prompt": "블록 크기가 128비트이고 키 길이로 128·192·256비트를 사용하는 대칭키 암호 알고리즘의 약어를 쓰시오.",
    "answer": "AES",
    "explanation": "AES는 대칭키 블록 암호 알고리즘입니다.",
    "source": 2,
    "page": 18,
    "aliases": [
      "AES"
    ]
  },
  {
    "id": "q96",
    "category": "프로그래밍",
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "page": 7,
    "examEvidence": {
      "source": 1,
      "page": 36,
      "dates": [
        "2025.4",
        "2024.7",
        "2021.10",
        "2021.4"
      ],
      "topic": "결합도",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-coupling"
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
    "page": 7,
    "examEvidence": {
      "source": 1,
      "page": 36,
      "dates": [
        "2025.4",
        "2024.7",
        "2021.10",
        "2021.4"
      ],
      "topic": "결합도",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-coupling"
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
    "page": 7,
    "examEvidence": {
      "source": 1,
      "page": 36,
      "dates": [
        "2025.4",
        "2024.7",
        "2021.10",
        "2021.4"
      ],
      "topic": "결합도",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-coupling"
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
    "page": 7,
    "examEvidence": {
      "source": 1,
      "page": 36,
      "dates": [
        "2025.4",
        "2024.7",
        "2021.10",
        "2021.4"
      ],
      "topic": "결합도",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-coupling"
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
    "page": 7,
    "examEvidence": {
      "source": 1,
      "page": 36,
      "dates": [
        "2024.7",
        "2021.7"
      ],
      "topic": "응집도",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-cohesion"
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
    "page": 7,
    "examEvidence": {
      "source": 1,
      "page": 36,
      "dates": [
        "2024.7",
        "2021.7"
      ],
      "topic": "응집도",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-cohesion"
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
    "page": 7,
    "examEvidence": {
      "source": 1,
      "page": 36,
      "dates": [
        "2024.7",
        "2021.7"
      ],
      "topic": "응집도",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-cohesion"
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
    "page": 8,
    "topic": "pattern",
    "concept": "memento",
    "exercise": "description",
    "patternGroup": "행위"
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
    "page": 8,
    "topic": "pattern",
    "concept": "strategy",
    "exercise": "description",
    "patternGroup": "행위"
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
    "page": 8,
    "topic": "pattern",
    "concept": "state",
    "exercise": "description",
    "patternGroup": "행위"
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
    "page": 8,
    "topic": "pattern",
    "concept": "iterator",
    "exercise": "description",
    "patternGroup": "행위",
    "examEvidence": {
      "source": 1,
      "page": 40,
      "dates": [
        "2024.7"
      ],
      "topic": "반복자",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-pattern-iterator"
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
    "page": 8,
    "topic": "pattern",
    "concept": "mediator",
    "exercise": "description",
    "patternGroup": "행위"
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
    "page": 8,
    "topic": "pattern",
    "concept": "command",
    "exercise": "description",
    "patternGroup": "행위"
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
    "page": 8,
    "topic": "pattern",
    "concept": "chain-of-responsibility",
    "exercise": "description",
    "patternGroup": "행위"
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
    "page": 8,
    "topic": "pattern",
    "concept": "template-method",
    "exercise": "description",
    "patternGroup": "행위"
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
    "page": 23,
    "examEvidence": {
      "source": 1,
      "page": 59,
      "dates": [
        "2022.5",
        "2021.7"
      ],
      "topic": "SQL 정렬",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-sort"
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
    "page": 23,
    "examEvidence": {
      "source": 1,
      "page": 61,
      "dates": [
        "2023.10"
      ],
      "topic": "SQL 집합 연산",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-set"
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
      "크로스 사이트 요청 위조",
      "Cross-Site Request Forgery",
      "CSRF 공격",
      "Cross-Site Request Forgery Attack"
    ],
    "explanation": "사용자가 인증된 상태를 악용해 요청을 위조하는 공격입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-csrf",
    "exercise": "description",
    "patternGroup": "웹 공격"
  },
  {
    "id": "q195",
    "category": "보안",
    "type": "short",
    "prompt": "문서 파일 등을 암호화하여 이용을 막고 금전을 요구하는 악성코드는?",
    "answer": "랜섬웨어",
    "aliases": [
      "랜섬웨어",
      "Ransomware",
      "랜섬웨어 공격",
      "Ransomware Attack"
    ],
    "explanation": "복구를 대가로 금전을 요구하는 악성코드입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-ransomware",
    "exercise": "description",
    "patternGroup": "악성코드"
  },
  {
    "id": "q196",
    "category": "보안",
    "type": "short",
    "prompt": "다른 프로그램에 기생하지 않고 스스로 복제·전파하는 악성코드는?",
    "answer": "웜",
    "aliases": [
      "웜",
      "Worm",
      "웜 공격",
      "Worm Attack"
    ],
    "explanation": "웜은 독립적으로 실행되며 네트워크 등을 통해 전파할 수 있습니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-worm",
    "exercise": "description",
    "patternGroup": "악성코드"
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
      "트로이목마",
      "트로이 목마 공격",
      "Trojan Horse Attack",
      "Trojan"
    ],
    "explanation": "정상 프로그램으로 가장하며 자체 복제 기능은 일반적인 특징이 아닙니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-trojan",
    "exercise": "description",
    "patternGroup": "악성코드"
  },
  {
    "id": "q198",
    "category": "보안",
    "type": "short",
    "prompt": "기관이나 지인을 사칭하여 비밀번호나 금융 정보를 입력하도록 유도하는 공격은?",
    "answer": "피싱",
    "aliases": [
      "피싱",
      "Phishing",
      "피싱 공격",
      "Phishing Attack"
    ],
    "explanation": "신뢰할 만한 발신자인 것처럼 속여 정보를 탈취합니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-phishing",
    "exercise": "description",
    "patternGroup": "정보 탈취"
  },
  {
    "id": "q199",
    "category": "보안",
    "type": "short",
    "prompt": "문자 메시지에 악성 링크 등을 보내 정보를 탈취하는 공격은?",
    "answer": "스미싱",
    "aliases": [
      "스미싱",
      "Smishing",
      "스미싱 공격",
      "Smishing Attack"
    ],
    "explanation": "SMS를 이용한 피싱 공격입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-smishing",
    "exercise": "description",
    "patternGroup": "정보 탈취"
  },
  {
    "id": "q200",
    "category": "보안",
    "type": "short",
    "prompt": "네트워크에서 전송되는 패킷을 엿보아 정보를 수집하는 행위는?",
    "answer": "스니핑",
    "aliases": [
      "스니핑",
      "Sniffing",
      "스니핑 공격",
      "Sniffing Attack"
    ],
    "explanation": "Sniffing은 통신 데이터를 도청하는 행위입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-sniffing",
    "exercise": "description",
    "patternGroup": "네트워크 공격"
  },
  {
    "id": "q201",
    "category": "보안",
    "type": "short",
    "prompt": "다른 사용자나 시스템의 주소·신원인 것처럼 위장하는 공격은?",
    "answer": "스푸핑",
    "aliases": [
      "스푸핑",
      "Spoofing",
      "스푸핑 공격",
      "Spoofing Attack"
    ],
    "explanation": "Spoofing에는 IP, ARP, DNS 등을 이용한 위장이 있습니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-spoofing",
    "exercise": "description",
    "patternGroup": "네트워크 공격"
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
      "워터링홀",
      "워터링 홀 공격",
      "Watering Hole Attack"
    ],
    "explanation": "Watering Hole은 대상의 방문 경로를 이용하여 감염을 유도합니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-watering-hole",
    "exercise": "description",
    "patternGroup": "정보 탈취"
  },
  {
    "id": "q203",
    "category": "보안",
    "type": "short",
    "prompt": "다른 서비스에서 유출된 아이디·비밀번호 조합으로 로그인을 시도하는 공격은?",
    "answer": "크리덴셜 스터핑",
    "aliases": [
      "크리덴셜 스터핑",
      "Credential Stuffing",
      "크리덴셜 스터핑 공격",
      "Credential Stuffing Attack",
      "크리덴셜스터핑"
    ],
    "explanation": "여러 사이트에서 같은 인증 정보를 재사용하는 습관을 악용합니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-credential-stuffing",
    "exercise": "description",
    "patternGroup": "정보 탈취"
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
    "id": "q262",
    "category": "계산",
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
    "prompt": "T의 열 v에는 순서대로 10, NULL, 30, 10가 들어 있다. SELECT COUNT(*) FROM T; 의 결과는?",
    "answer": "4",
    "aliases": [
      "4"
    ],
    "explanation": "COUNT(*)는 모든 행을 셉니다. 따라서 4입니다.",
    "source": 2,
    "page": 23,
    "examEvidence": {
      "source": 1,
      "page": 60,
      "dates": [
        "2025.11",
        "2023.4",
        "2022.10",
        "2021.4"
      ],
      "topic": "SQL 집계·NULL",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-aggregate"
  },
  {
    "id": "q293",
    "category": "데이터베이스",
    "type": "output",
    "prompt": "T의 열 v에는 순서대로 10, NULL, 30, 10가 들어 있다. SELECT COUNT(v) FROM T; 의 결과는?",
    "answer": "3",
    "aliases": [
      "3"
    ],
    "explanation": "COUNT(v)는 NULL이 아닌 값만 셉니다. 따라서 3입니다.",
    "source": 2,
    "page": 23,
    "examEvidence": {
      "source": 1,
      "page": 60,
      "dates": [
        "2025.11",
        "2023.4",
        "2022.10",
        "2021.4"
      ],
      "topic": "SQL 집계·NULL",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-aggregate"
  },
  {
    "id": "q294",
    "category": "데이터베이스",
    "type": "output",
    "prompt": "T의 열 v에는 순서대로 10, NULL, 30, 10가 들어 있다. SELECT COUNT(DISTINCT v) FROM T; 의 결과는?",
    "answer": "2",
    "aliases": [
      "2"
    ],
    "explanation": "COUNT(DISTINCT v)는 NULL을 제외하고 중복을 제거한 값의 수를 셉니다. 따라서 2입니다.",
    "source": 2,
    "page": 23,
    "examEvidence": {
      "source": 1,
      "page": 60,
      "dates": [
        "2025.11",
        "2023.4",
        "2022.10",
        "2021.4"
      ],
      "topic": "SQL 집계·NULL",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-aggregate"
  },
  {
    "id": "q295",
    "category": "데이터베이스",
    "type": "output",
    "prompt": "T의 열 v에는 순서대로 NULL, 5, 5, 15, NULL가 들어 있다. SELECT COUNT(*) FROM T; 의 결과는?",
    "answer": "5",
    "aliases": [
      "5"
    ],
    "explanation": "COUNT(*)는 모든 행을 셉니다. 따라서 5입니다.",
    "source": 2,
    "page": 23,
    "examEvidence": {
      "source": 1,
      "page": 60,
      "dates": [
        "2025.11",
        "2023.4",
        "2022.10",
        "2021.4"
      ],
      "topic": "SQL 집계·NULL",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-aggregate"
  },
  {
    "id": "q296",
    "category": "데이터베이스",
    "type": "output",
    "prompt": "T의 열 v에는 순서대로 NULL, 5, 5, 15, NULL가 들어 있다. SELECT COUNT(v) FROM T; 의 결과는?",
    "answer": "3",
    "aliases": [
      "3"
    ],
    "explanation": "COUNT(v)는 NULL이 아닌 값만 셉니다. 따라서 3입니다.",
    "source": 2,
    "page": 23,
    "examEvidence": {
      "source": 1,
      "page": 60,
      "dates": [
        "2025.11",
        "2023.4",
        "2022.10",
        "2021.4"
      ],
      "topic": "SQL 집계·NULL",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-aggregate"
  },
  {
    "id": "q297",
    "category": "데이터베이스",
    "type": "output",
    "prompt": "T의 열 v에는 순서대로 NULL, 5, 5, 15, NULL가 들어 있다. SELECT COUNT(DISTINCT v) FROM T; 의 결과는?",
    "answer": "2",
    "aliases": [
      "2"
    ],
    "explanation": "COUNT(DISTINCT v)는 NULL을 제외하고 중복을 제거한 값의 수를 셉니다. 따라서 2입니다.",
    "source": 2,
    "page": 23,
    "examEvidence": {
      "source": 1,
      "page": 60,
      "dates": [
        "2025.11",
        "2023.4",
        "2022.10",
        "2021.4"
      ],
      "topic": "SQL 집계·NULL",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-aggregate"
  },
  {
    "id": "q298",
    "category": "데이터베이스",
    "type": "output",
    "prompt": "T의 열 v에는 순서대로 2, 4, 6, 8가 들어 있다. SELECT COUNT(*) FROM T; 의 결과는?",
    "answer": "4",
    "aliases": [
      "4"
    ],
    "explanation": "COUNT(*)는 모든 행을 셉니다. 따라서 4입니다.",
    "source": 2,
    "page": 23,
    "examEvidence": {
      "source": 1,
      "page": 60,
      "dates": [
        "2025.11",
        "2023.4",
        "2022.10",
        "2021.4"
      ],
      "topic": "SQL 집계·NULL",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-aggregate"
  },
  {
    "id": "q299",
    "category": "데이터베이스",
    "type": "output",
    "prompt": "T의 열 v에는 순서대로 2, 4, 6, 8가 들어 있다. SELECT COUNT(v) FROM T; 의 결과는?",
    "answer": "4",
    "aliases": [
      "4"
    ],
    "explanation": "COUNT(v)는 NULL이 아닌 값만 셉니다. 따라서 4입니다.",
    "source": 2,
    "page": 23,
    "examEvidence": {
      "source": 1,
      "page": 60,
      "dates": [
        "2025.11",
        "2023.4",
        "2022.10",
        "2021.4"
      ],
      "topic": "SQL 집계·NULL",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-aggregate"
  },
  {
    "id": "q300",
    "category": "데이터베이스",
    "type": "output",
    "prompt": "T의 열 v에는 순서대로 2, 4, 6, 8가 들어 있다. SELECT COUNT(DISTINCT v) FROM T; 의 결과는?",
    "answer": "4",
    "aliases": [
      "4"
    ],
    "explanation": "COUNT(DISTINCT v)는 NULL을 제외하고 중복을 제거한 값의 수를 셉니다. 따라서 4입니다.",
    "source": 2,
    "page": 23,
    "examEvidence": {
      "source": 1,
      "page": 60,
      "dates": [
        "2025.11",
        "2023.4",
        "2022.10",
        "2021.4"
      ],
      "topic": "SQL 집계·NULL",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-aggregate"
  },
  {
    "id": "q301",
    "category": "데이터베이스",
    "type": "output",
    "prompt": "T의 열 v에는 순서대로 NULL, NULL, 7가 들어 있다. SELECT COUNT(*) FROM T; 의 결과는?",
    "answer": "3",
    "aliases": [
      "3"
    ],
    "explanation": "COUNT(*)는 모든 행을 셉니다. 따라서 3입니다.",
    "source": 2,
    "page": 23,
    "examEvidence": {
      "source": 1,
      "page": 60,
      "dates": [
        "2025.11",
        "2023.4",
        "2022.10",
        "2021.4"
      ],
      "topic": "SQL 집계·NULL",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-aggregate"
  },
  {
    "id": "q302",
    "category": "데이터베이스",
    "type": "output",
    "prompt": "T의 열 v에는 순서대로 NULL, NULL, 7가 들어 있다. SELECT COUNT(v) FROM T; 의 결과는?",
    "answer": "1",
    "aliases": [
      "1"
    ],
    "explanation": "COUNT(v)는 NULL이 아닌 값만 셉니다. 따라서 1입니다.",
    "source": 2,
    "page": 23,
    "examEvidence": {
      "source": 1,
      "page": 60,
      "dates": [
        "2025.11",
        "2023.4",
        "2022.10",
        "2021.4"
      ],
      "topic": "SQL 집계·NULL",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-aggregate"
  },
  {
    "id": "q303",
    "category": "데이터베이스",
    "type": "output",
    "prompt": "T의 열 v에는 순서대로 NULL, NULL, 7가 들어 있다. SELECT COUNT(DISTINCT v) FROM T; 의 결과는?",
    "answer": "1",
    "aliases": [
      "1"
    ],
    "explanation": "COUNT(DISTINCT v)는 NULL을 제외하고 중복을 제거한 값의 수를 셉니다. 따라서 1입니다.",
    "source": 2,
    "page": 23,
    "examEvidence": {
      "source": 1,
      "page": 60,
      "dates": [
        "2025.11",
        "2023.4",
        "2022.10",
        "2021.4"
      ],
      "topic": "SQL 집계·NULL",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-aggregate"
  },
  {
    "id": "q304",
    "category": "데이터베이스",
    "type": "output",
    "prompt": "T의 열 v에는 순서대로 1, 1, 1, 2, 2가 들어 있다. SELECT COUNT(*) FROM T; 의 결과는?",
    "answer": "5",
    "aliases": [
      "5"
    ],
    "explanation": "COUNT(*)는 모든 행을 셉니다. 따라서 5입니다.",
    "source": 2,
    "page": 23,
    "examEvidence": {
      "source": 1,
      "page": 60,
      "dates": [
        "2025.11",
        "2023.4",
        "2022.10",
        "2021.4"
      ],
      "topic": "SQL 집계·NULL",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-aggregate"
  },
  {
    "id": "q305",
    "category": "데이터베이스",
    "type": "output",
    "prompt": "T의 열 v에는 순서대로 1, 1, 1, 2, 2가 들어 있다. SELECT COUNT(v) FROM T; 의 결과는?",
    "answer": "5",
    "aliases": [
      "5"
    ],
    "explanation": "COUNT(v)는 NULL이 아닌 값만 셉니다. 따라서 5입니다.",
    "source": 2,
    "page": 23,
    "examEvidence": {
      "source": 1,
      "page": 60,
      "dates": [
        "2025.11",
        "2023.4",
        "2022.10",
        "2021.4"
      ],
      "topic": "SQL 집계·NULL",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-aggregate"
  },
  {
    "id": "q306",
    "category": "데이터베이스",
    "type": "output",
    "prompt": "T의 열 v에는 순서대로 1, 1, 1, 2, 2가 들어 있다. SELECT COUNT(DISTINCT v) FROM T; 의 결과는?",
    "answer": "2",
    "aliases": [
      "2"
    ],
    "explanation": "COUNT(DISTINCT v)는 NULL을 제외하고 중복을 제거한 값의 수를 셉니다. 따라서 2입니다.",
    "source": 2,
    "page": 23,
    "examEvidence": {
      "source": 1,
      "page": 60,
      "dates": [
        "2025.11",
        "2023.4",
        "2022.10",
        "2021.4"
      ],
      "topic": "SQL 집계·NULL",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-aggregate"
  },
  {
    "id": "q307",
    "category": "프로그래밍",
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
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
    "type": "output",
    "prompt": "stdio.h를 포함한 main 함수 안에서 다음 C 코드를 실행했다. 출력 결과는?\n\n[C]\nint a[] = {2, 5, 8};\nint *p = a;\nprintf(\"%d\", *(p + 2));",
    "answer": "8",
    "aliases": [
      "8"
    ],
    "explanation": "p + 2는 배열의 인덱스 2를 가리키므로 값은 8입니다.",
    "source": 1,
    "page": 77
  },
  {
    "id": "q331",
    "category": "데이터베이스",
    "type": "blank",
    "prompt": "다음 빈칸에 들어갈 용어 또는 구문을 쓰시오.\n\nSELECT name FROM Student\n(     ) score >= 80;",
    "answer": "WHERE",
    "aliases": [
      "WHERE"
    ],
    "explanation": "WHERE로 개별 행의 조건을 지정합니다.",
    "source": 2,
    "page": 22
  },
  {
    "id": "q332",
    "category": "데이터베이스",
    "type": "blank",
    "prompt": "다음 빈칸에 들어갈 용어 또는 구문을 쓰시오.\n\nSELECT dept, COUNT(*) FROM Employee\n(     ) dept;",
    "answer": "GROUP BY",
    "aliases": [
      "GROUP BY"
    ],
    "explanation": "GROUP BY는 같은 부서 값을 가지는 행들을 그룹화합니다.",
    "source": 2,
    "page": 23,
    "examEvidence": {
      "source": 1,
      "page": 61,
      "dates": [
        "2024.7",
        "2023.4",
        "2020.11",
        "2020.10"
      ],
      "topic": "GROUP BY·HAVING",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-group"
  },
  {
    "id": "q333",
    "category": "데이터베이스",
    "type": "blank",
    "prompt": "다음 빈칸에 들어갈 용어 또는 구문을 쓰시오.\n\nSELECT dept, AVG(salary) FROM Employee\nGROUP BY dept\n(     ) AVG(salary) >= 3000;",
    "answer": "HAVING",
    "aliases": [
      "HAVING"
    ],
    "explanation": "집계된 그룹의 조건은 HAVING으로 지정합니다.",
    "source": 2,
    "page": 23,
    "examEvidence": {
      "source": 1,
      "page": 61,
      "dates": [
        "2024.7",
        "2023.4",
        "2020.11",
        "2020.10"
      ],
      "topic": "GROUP BY·HAVING",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-group"
  },
  {
    "id": "q334",
    "category": "데이터베이스",
    "type": "blank",
    "prompt": "다음 빈칸에 들어갈 용어 또는 구문을 쓰시오.\n\nSELECT name FROM Student\nORDER BY score (     );\n단, 점수가 높은 학생부터 출력한다.",
    "answer": "DESC",
    "aliases": [
      "DESC"
    ],
    "explanation": "DESC는 내림차순입니다.",
    "source": 2,
    "page": 23,
    "examEvidence": {
      "source": 1,
      "page": 59,
      "dates": [
        "2022.5",
        "2021.7"
      ],
      "topic": "SQL 정렬",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-sort"
  },
  {
    "id": "q335",
    "category": "데이터베이스",
    "type": "blank",
    "prompt": "다음 빈칸에 들어갈 용어 또는 구문을 쓰시오.\n\nSELECT (     ) dept FROM Employee;\n단, 같은 부서명은 한 번만 출력한다.",
    "answer": "DISTINCT",
    "aliases": [
      "DISTINCT"
    ],
    "explanation": "DISTINCT는 선택된 결과에서 중복을 제거합니다.",
    "source": 2,
    "page": 22
  },
  {
    "id": "q336",
    "category": "데이터베이스",
    "type": "blank",
    "prompt": "다음 빈칸에 들어갈 용어 또는 구문을 쓰시오.\n\nUPDATE Employee\n(     ) salary = 4000\nWHERE id = 7;",
    "answer": "SET",
    "aliases": [
      "SET"
    ],
    "explanation": "UPDATE에서 변경할 속성과 값은 SET으로 지정합니다.",
    "source": 2,
    "page": 24
  },
  {
    "id": "q337",
    "category": "데이터베이스",
    "type": "blank",
    "prompt": "다음 빈칸에 들어갈 용어 또는 구문을 쓰시오.\n\nINSERT INTO Student(id, name)\n(     ) (7, 'Mina');",
    "answer": "VALUES",
    "aliases": [
      "VALUES"
    ],
    "explanation": "VALUES 뒤에 추가할 행의 값을 나열합니다.",
    "source": 2,
    "page": 24
  },
  {
    "id": "q338",
    "category": "데이터베이스",
    "type": "blank",
    "prompt": "다음 빈칸에 들어갈 용어 또는 구문을 쓰시오.\n\n(     ) FROM Student WHERE id = 7;\n단, 해당 학생의 행을 삭제한다.",
    "answer": "DELETE",
    "aliases": [
      "DELETE"
    ],
    "explanation": "DELETE FROM으로 조건에 해당하는 행을 삭제합니다.",
    "source": 2,
    "page": 22
  },
  {
    "id": "q339",
    "category": "데이터베이스",
    "type": "blank",
    "prompt": "다음 빈칸에 들어갈 용어 또는 구문을 쓰시오.\n\nSELECT * FROM Employee E JOIN Department D\n(     ) E.dept_id = D.id;",
    "answer": "ON",
    "aliases": [
      "ON"
    ],
    "explanation": "JOIN의 결합 조건은 ON 절로 지정할 수 있습니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q340",
    "category": "데이터베이스",
    "type": "blank",
    "prompt": "다음 빈칸에 들어갈 용어 또는 구문을 쓰시오.\n\nSELECT name FROM Student\nWHERE name (     ) 'K%';\n단, K로 시작하는 이름을 조회한다.",
    "answer": "LIKE",
    "aliases": [
      "LIKE"
    ],
    "explanation": "LIKE는 패턴을 이용한 문자열 비교입니다. %는 0개 이상의 문자에 대응합니다.",
    "source": 2,
    "page": 23
  },
  {
    "id": "q341",
    "category": "데이터베이스",
    "type": "blank",
    "prompt": "다음 빈칸에 들어갈 용어 또는 구문을 쓰시오.\n\nSELECT * FROM Employee\nWHERE manager_id (     );\n단, 관리자가 지정되지 않은 행만 조회한다.",
    "answer": "IS NULL",
    "aliases": [
      "IS NULL"
    ],
    "explanation": "NULL 비교에는 = 대신 IS NULL을 사용합니다.",
    "source": 2,
    "page": 22
  },
  {
    "id": "q342",
    "category": "데이터베이스",
    "type": "blank",
    "prompt": "다음 빈칸에 들어갈 용어 또는 구문을 쓰시오.\n\n(     ) SELECT ON Student FROM learner;\n단, learner의 조회 권한을 취소한다.",
    "answer": "REVOKE",
    "aliases": [
      "REVOKE"
    ],
    "explanation": "REVOKE는 이미 부여된 권한을 취소합니다.",
    "source": 2,
    "page": 22
  },
  {
    "id": "q343",
    "category": "소프트웨어",
    "type": "blank",
    "prompt": "다음 빈칸에 들어갈 용어 또는 구문을 쓰시오.\n\n좋은 모듈 설계는 낮은 결합도와 높은 (     )를 지향한다.",
    "answer": "응집도",
    "aliases": [
      "응집도"
    ],
    "explanation": "응집도는 모듈 내부의 기능들이 얼마나 관련되어 있는지를 뜻합니다.",
    "source": 2,
    "page": 7,
    "examEvidence": {
      "source": 1,
      "page": 36,
      "dates": [
        "2024.7",
        "2021.7"
      ],
      "topic": "응집도",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-cohesion"
  },
  {
    "id": "q344",
    "category": "소프트웨어",
    "type": "blank",
    "prompt": "다음 빈칸에 들어갈 용어 또는 구문을 쓰시오.\n\n상향식 통합 테스트는 상위 호출 모듈 대신 (     )를 사용한다.",
    "answer": "드라이버",
    "aliases": [
      "드라이버"
    ],
    "explanation": "드라이버는 테스트 대상 모듈을 호출하고 입력을 제공합니다.",
    "source": 2,
    "page": 9
  },
  {
    "id": "q345",
    "category": "소프트웨어",
    "type": "blank",
    "prompt": "다음 빈칸에 들어갈 용어 또는 구문을 쓰시오.\n\n하향식 통합 테스트는 미구현 하위 모듈 대신 (     )을 사용한다.",
    "answer": "스텁",
    "aliases": [
      "스텁"
    ],
    "explanation": "스텁은 호출받는 하위 모듈의 역할을 단순하게 대체합니다.",
    "source": 2,
    "page": 9
  },
  {
    "id": "q346",
    "category": "소프트웨어",
    "type": "blank",
    "prompt": "다음 빈칸에 들어갈 용어 또는 구문을 쓰시오.\n\n객체지향 설계에서 확장에는 열리고 수정에는 닫혀 있어야 하는 원칙의 약어는 (     )이다.",
    "answer": "OCP",
    "aliases": [
      "OCP"
    ],
    "explanation": "OCP는 개방 폐쇄 원칙입니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q347",
    "category": "프로그래밍",
    "type": "blank",
    "prompt": "다음 Python 코드의 빈칸을 채우시오.\n\na = [1, 2]\na.(     )(3)\nprint(a)\n\n출력: [1, 2, 3]",
    "answer": "append",
    "aliases": [
      "append"
    ],
    "explanation": "append는 리스트 끝에 원소 하나를 추가합니다.",
    "source": 1,
    "page": 92
  },
  {
    "id": "q348",
    "category": "프로그래밍",
    "type": "blank",
    "prompt": "다음 Python 코드의 빈칸을 채우시오.\n\na = [2, 4, 6, 8, 10]\nprint(a[1:4:(     )])\n\n출력: [4, 8]",
    "answer": "2",
    "aliases": [
      "2"
    ],
    "explanation": "인덱스 1과 3의 값을 얻으려면 증가값을 2로 지정합니다.",
    "source": 1,
    "page": 97
  },
  {
    "id": "q349",
    "category": "프로그래밍",
    "type": "blank",
    "prompt": "다음 Python 코드의 빈칸을 채우시오.\n\nf = (     ) x: x * x\nprint(f(3))\n\n출력: 9",
    "answer": "lambda",
    "aliases": [
      "lambda"
    ],
    "explanation": "lambda는 간단한 익명 함수를 정의합니다.",
    "source": 1,
    "page": 94
  },
  {
    "id": "q350",
    "category": "프로그래밍",
    "type": "blank",
    "prompt": "다음 Python 코드의 빈칸을 채우시오.\n\nprint(17 (     ) 5)\n\n출력: 2",
    "answer": "%",
    "aliases": [
      "%"
    ],
    "explanation": "%는 나머지 연산자입니다.",
    "source": 1,
    "page": 96
  },
  {
    "id": "q351",
    "category": "프로그래밍",
    "type": "blank",
    "prompt": "다음 C 코드의 빈칸을 채우시오.\nC 코드는 stdio.h를 포함한 main 함수 안에서 실행한다고 가정한다.\n\nint n = 4;\nint *p = (     )n;\nprintf(\"%d\", *p);\n\n출력: 4",
    "answer": "&",
    "aliases": [
      "&"
    ],
    "explanation": "주소 연산자 &로 n의 주소를 포인터에 저장합니다.",
    "source": 1,
    "page": 77
  },
  {
    "id": "q352",
    "category": "프로그래밍",
    "type": "blank",
    "prompt": "다음 C 코드의 빈칸을 채우시오.\nC 코드는 stdio.h를 포함한 main 함수 안에서 실행한다고 가정한다.\n\nint a[] = {3, 6, 9};\nprintf(\"%d\", a[(     )]);\n\n출력: 9",
    "answer": "2",
    "aliases": [
      "2"
    ],
    "explanation": "배열의 인덱스는 0부터 시작하므로 세 번째 원소의 인덱스는 2입니다.",
    "source": 1,
    "page": 72
  },
  {
    "id": "q353",
    "category": "프로그래밍",
    "type": "blank",
    "prompt": "다음 Java 코드의 빈칸을 채우시오.\n\nint[] a = {1, 2, 3};\nSystem.out.print(a.(     ));\n\n출력: 3",
    "answer": "length",
    "aliases": [
      "length"
    ],
    "explanation": "Java 배열의 길이는 length 필드로 확인합니다.",
    "source": 1,
    "page": 85
  },
  {
    "id": "q354",
    "category": "프로그래밍",
    "type": "blank",
    "prompt": "다음 Java 코드의 빈칸을 채우시오.\n\nclass Child (     ) Parent { }\n\n단, Child가 Parent 클래스를 상속한다.",
    "answer": "extends",
    "aliases": [
      "extends"
    ],
    "explanation": "클래스 상속을 선언할 때 extends를 사용합니다.",
    "source": 1,
    "page": 90
  },
  {
    "id": "q355",
    "category": "데이터베이스",
    "type": "sql",
    "prompt": "Student(id, name, score) 테이블에서 모든 열과 행을 조회하시오. SELECT *를 사용하시오.\n키워드 대소문자·공백·마지막 세미콜론은 자유롭게 작성하시오.",
    "answer": "SELECT * FROM Student;",
    "aliases": [
      "SELECT * FROM Student;"
    ],
    "explanation": "*는 모든 열을 선택하며 조건이 없으므로 모든 행을 조회합니다.",
    "source": 2,
    "page": 22
  },
  {
    "id": "q356",
    "category": "데이터베이스",
    "type": "sql",
    "prompt": "Student(id, name, score) 테이블에서 score가 80 이상인 학생의 name만 조회하시오. 별칭은 사용하지 마시오.\n키워드 대소문자·공백·마지막 세미콜론은 자유롭게 작성하시오.",
    "answer": "SELECT name FROM Student WHERE score >= 80;",
    "aliases": [
      "SELECT name FROM Student WHERE score >= 80;"
    ],
    "explanation": "WHERE로 점수 조건을 적용한 뒤 name을 출력합니다.",
    "source": 2,
    "page": 22
  },
  {
    "id": "q357",
    "category": "데이터베이스",
    "type": "sql",
    "prompt": "Student(id, name, score) 테이블에서 name, score를 이 순서로 조회하시오. score의 내림차순으로 정렬하고 별칭은 사용하지 마시오.\n키워드 대소문자·공백·마지막 세미콜론은 자유롭게 작성하시오.",
    "answer": "SELECT name, score FROM Student ORDER BY score DESC;",
    "aliases": [
      "SELECT name, score FROM Student ORDER BY score DESC;"
    ],
    "explanation": "ORDER BY score DESC는 점수가 높은 행부터 정렬합니다.",
    "source": 2,
    "page": 22,
    "examEvidence": {
      "source": 1,
      "page": 59,
      "dates": [
        "2022.5",
        "2021.7"
      ],
      "topic": "SQL 정렬",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-sort"
  },
  {
    "id": "q358",
    "category": "데이터베이스",
    "type": "sql",
    "prompt": "Employee(id, dept, salary) 테이블의 중복 없는 dept 값만 조회하시오. DISTINCT를 사용하시오.\n키워드 대소문자·공백·마지막 세미콜론은 자유롭게 작성하시오.",
    "answer": "SELECT DISTINCT dept FROM Employee;",
    "aliases": [
      "SELECT DISTINCT dept FROM Employee;"
    ],
    "explanation": "DISTINCT로 중복 부서 값을 제거합니다.",
    "source": 2,
    "page": 22
  },
  {
    "id": "q359",
    "category": "데이터베이스",
    "type": "sql",
    "prompt": "Student(id, name, score) 테이블에 id=7, name='Mina', score=90인 행을 삽입하시오. 열을 id, name, score 순서로 명시하시오.\n키워드 대소문자·공백·마지막 세미콜론은 자유롭게 작성하시오.",
    "answer": "INSERT INTO Student (id, name, score) VALUES (7, 'Mina', 90);",
    "aliases": [
      "INSERT INTO Student (id, name, score) VALUES (7, 'Mina', 90);"
    ],
    "explanation": "명시한 열의 순서와 VALUES의 값 순서를 일치시킵니다.",
    "source": 2,
    "page": 22
  },
  {
    "id": "q360",
    "category": "데이터베이스",
    "type": "sql",
    "prompt": "Employee(id, dept, salary) 테이블에서 id가 7인 직원의 salary를 4000으로 변경하시오.\n키워드 대소문자·공백·마지막 세미콜론은 자유롭게 작성하시오.",
    "answer": "UPDATE Employee SET salary = 4000 WHERE id = 7;",
    "aliases": [
      "UPDATE Employee SET salary = 4000 WHERE id = 7;"
    ],
    "explanation": "SET으로 변경 값을, WHERE로 대상 행을 지정합니다.",
    "source": 2,
    "page": 22
  },
  {
    "id": "q361",
    "category": "데이터베이스",
    "type": "sql",
    "prompt": "Student(id, name, score) 테이블에서 id가 7인 행을 삭제하시오.\n키워드 대소문자·공백·마지막 세미콜론은 자유롭게 작성하시오.",
    "answer": "DELETE FROM Student WHERE id = 7;",
    "aliases": [
      "DELETE FROM Student WHERE id = 7;"
    ],
    "explanation": "WHERE가 없으면 모든 행을 삭제하므로 대상 조건을 명시합니다.",
    "source": 2,
    "page": 22
  },
  {
    "id": "q362",
    "category": "데이터베이스",
    "type": "sql",
    "prompt": "Employee(id, dept, salary) 테이블에서 전체 행 수를 조회하시오. COUNT(*)를 사용하고 별칭은 생략하시오.\n키워드 대소문자·공백·마지막 세미콜론은 자유롭게 작성하시오.",
    "answer": "SELECT COUNT(*) FROM Employee;",
    "aliases": [
      "SELECT COUNT(*) FROM Employee;"
    ],
    "explanation": "COUNT(*)는 NULL 여부와 관계없이 모든 행을 셉니다.",
    "source": 2,
    "page": 22,
    "examEvidence": {
      "source": 1,
      "page": 60,
      "dates": [
        "2025.11",
        "2023.4",
        "2022.10",
        "2021.4"
      ],
      "topic": "SQL 집계·NULL",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-aggregate"
  },
  {
    "id": "q363",
    "category": "데이터베이스",
    "type": "sql",
    "prompt": "Employee(id, dept, salary) 테이블에서 dept, AVG(salary)를 이 순서로 조회하시오. 부서별로 그룹화하며 별칭은 생략하시오.\n키워드 대소문자·공백·마지막 세미콜론은 자유롭게 작성하시오.",
    "answer": "SELECT dept, AVG(salary) FROM Employee GROUP BY dept;",
    "aliases": [
      "SELECT dept, AVG(salary) FROM Employee GROUP BY dept;"
    ],
    "explanation": "GROUP BY로 부서별 그룹을 만들고 AVG로 그룹의 평균 급여를 구합니다.",
    "source": 2,
    "page": 22,
    "examEvidence": {
      "source": 1,
      "page": 61,
      "dates": [
        "2024.7",
        "2023.4",
        "2020.11",
        "2020.10"
      ],
      "topic": "GROUP BY·HAVING",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-group"
  },
  {
    "id": "q364",
    "category": "데이터베이스",
    "type": "sql",
    "prompt": "Employee(id, dept, salary) 테이블에서 dept, COUNT(*)를 조회하시오. 부서별로 그룹화하며 3명 이상인 부서만 출력하시오. 별칭은 생략하시오.\n키워드 대소문자·공백·마지막 세미콜론은 자유롭게 작성하시오.",
    "answer": "SELECT dept, COUNT(*) FROM Employee GROUP BY dept HAVING COUNT(*) >= 3;",
    "aliases": [
      "SELECT dept, COUNT(*) FROM Employee GROUP BY dept HAVING COUNT(*) >= 3;"
    ],
    "explanation": "집계 함수 COUNT(*)에 대한 그룹 조건은 HAVING에 지정합니다.",
    "source": 2,
    "page": 22,
    "examEvidence": {
      "source": 1,
      "page": 61,
      "dates": [
        "2024.7",
        "2023.4",
        "2020.11",
        "2020.10"
      ],
      "topic": "GROUP BY·HAVING",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-group"
  },
  {
    "id": "q365",
    "category": "데이터베이스",
    "type": "sql",
    "prompt": "Employee(id, manager_id) 테이블에서 manager_id가 NULL인 행의 모든 열을 조회하시오. SELECT *를 사용하시오.\n키워드 대소문자·공백·마지막 세미콜론은 자유롭게 작성하시오.",
    "answer": "SELECT * FROM Employee WHERE manager_id IS NULL;",
    "aliases": [
      "SELECT * FROM Employee WHERE manager_id IS NULL;"
    ],
    "explanation": "NULL을 찾을 때는 IS NULL 조건을 사용합니다.",
    "source": 2,
    "page": 22
  },
  {
    "id": "q366",
    "category": "데이터베이스",
    "type": "sql",
    "prompt": "Student 테이블의 조회 권한을 learner 사용자에게 부여하시오.\n키워드 대소문자·공백·마지막 세미콜론은 자유롭게 작성하시오.",
    "answer": "GRANT SELECT ON Student TO learner;",
    "aliases": [
      "GRANT SELECT ON Student TO learner;"
    ],
    "explanation": "권한 부여 구문은 GRANT 권한 ON 대상 TO 사용자입니다.",
    "source": 2,
    "page": 22
  },
  {
    "id": "q367",
    "category": "데이터베이스",
    "type": "essay",
    "prompt": "트랜잭션의 원자성과 지속성의 차이를 간단히 서술하시오.",
    "answer": "원자성은 트랜잭션의 모든 연산이 전부 반영되거나 전부 취소되는 특성이다. 지속성은 성공적으로 완료된 트랜잭션의 결과가 장애 이후에도 보존되는 특성이다.",
    "aliases": [
      "원자성은 트랜잭션의 모든 연산이 전부 반영되거나 전부 취소되는 특성이다. 지속성은 성공적으로 완료된 트랜잭션의 결과가 장애 이후에도 보존되는 특성이다."
    ],
    "explanation": "핵심: 원자성은 전부 성공 또는 전부 취소, 지속성은 완료 결과의 보존입니다.",
    "source": 2,
    "page": 10
  },
  {
    "id": "q368",
    "category": "데이터베이스",
    "type": "essay",
    "prompt": "데이터베이스 정규화의 목적을 이상 현상과 관련하여 서술하시오.",
    "answer": "데이터의 중복과 부적절한 종속 관계를 줄여 삽입·갱신·삭제 이상을 방지하고 데이터 무결성을 유지하기 위한 과정이다.",
    "aliases": [
      "데이터의 중복과 부적절한 종속 관계를 줄여 삽입·갱신·삭제 이상을 방지하고 데이터 무결성을 유지하기 위한 과정이다."
    ],
    "explanation": "핵심: 중복 감소, 종속 관계 정리, 이상 현상 방지입니다.",
    "source": 2,
    "page": 11
  },
  {
    "id": "q369",
    "category": "데이터베이스",
    "type": "essay",
    "prompt": "후보키가 만족해야 하는 두 조건을 쓰고 각각 설명하시오.",
    "answer": "유일성과 최소성이다. 유일성은 튜플을 고유하게 식별할 수 있다는 뜻이고, 최소성은 키에서 속성을 하나라도 제거하면 유일성이 깨진다는 뜻이다.",
    "aliases": [
      "유일성과 최소성이다. 유일성은 튜플을 고유하게 식별할 수 있다는 뜻이고, 최소성은 키에서 속성을 하나라도 제거하면 유일성이 깨진다는 뜻이다."
    ],
    "explanation": "핵심: 유일성 및 최소성을 함께 설명해야 합니다.",
    "source": 2,
    "page": 10
  },
  {
    "id": "q370",
    "category": "데이터베이스",
    "type": "essay",
    "prompt": "SQL의 WHERE와 HAVING이 조건을 적용하는 대상의 차이를 서술하시오.",
    "answer": "WHERE는 그룹화 전 개별 행을 필터링하며, HAVING은 GROUP BY로 만들어진 그룹에 조건을 적용한다.",
    "aliases": [
      "WHERE는 그룹화 전 개별 행을 필터링하며, HAVING은 GROUP BY로 만들어진 그룹에 조건을 적용한다."
    ],
    "explanation": "핵심: WHERE는 행, HAVING은 그룹입니다.",
    "source": 2,
    "page": 23,
    "examEvidence": {
      "source": 1,
      "page": 61,
      "dates": [
        "2024.7",
        "2023.4",
        "2020.11",
        "2020.10"
      ],
      "topic": "GROUP BY·HAVING",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-group"
  },
  {
    "id": "q371",
    "category": "소프트웨어",
    "type": "essay",
    "prompt": "모듈 설계에서 결합도와 응집도의 의미 및 바람직한 방향을 서술하시오.",
    "answer": "결합도는 모듈 간 의존 정도이고 응집도는 모듈 내부 요소의 기능적 관련 정도이다. 결합도는 낮추고 응집도는 높이는 것이 바람직하다.",
    "aliases": [
      "결합도는 모듈 간 의존 정도이고 응집도는 모듈 내부 요소의 기능적 관련 정도이다. 결합도는 낮추고 응집도는 높이는 것이 바람직하다."
    ],
    "explanation": "핵심: 외부 의존 감소, 내부 관련성 증가입니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q372",
    "category": "소프트웨어",
    "type": "essay",
    "prompt": "회귀 테스트를 수행하는 이유를 서술하시오.",
    "answer": "기능 추가나 코드 수정 후 기존에 정상 동작하던 기능에 새로운 결함이 발생하지 않았는지 확인하기 위해 수행한다.",
    "aliases": [
      "기능 추가나 코드 수정 후 기존에 정상 동작하던 기능에 새로운 결함이 발생하지 않았는지 확인하기 위해 수행한다."
    ],
    "explanation": "핵심: 변경이 기존 기능에 미친 부작용을 확인합니다.",
    "source": 2,
    "page": 9
  },
  {
    "id": "q373",
    "category": "소프트웨어",
    "type": "essay",
    "prompt": "화이트박스 테스트와 블랙박스 테스트의 관점 차이를 서술하시오.",
    "answer": "화이트박스는 내부 코드의 구조와 논리 경로를 기준으로 검사한다. 블랙박스는 내부 구현보다 명세에 따른 입력과 출력의 동작을 검사한다.",
    "aliases": [
      "화이트박스는 내부 코드의 구조와 논리 경로를 기준으로 검사한다. 블랙박스는 내부 구현보다 명세에 따른 입력과 출력의 동작을 검사한다."
    ],
    "explanation": "핵심: 내부 구조와 외부 동작의 차이입니다.",
    "source": 2,
    "page": 8
  },
  {
    "id": "q374",
    "category": "소프트웨어",
    "type": "essay",
    "prompt": "캡슐화의 의미와 장점을 간단히 서술하시오.",
    "answer": "데이터와 이를 처리하는 메서드를 묶고 외부에서 내부 구현에 직접 접근하지 못하도록 제한한다. 내부 구현의 변경 영향을 줄이고 인터페이스를 통해 사용할 수 있게 한다.",
    "aliases": [
      "데이터와 이를 처리하는 메서드를 묶고 외부에서 내부 구현에 직접 접근하지 못하도록 제한한다. 내부 구현의 변경 영향을 줄이고 인터페이스를 통해 사용할 수 있게 한다."
    ],
    "explanation": "핵심: 데이터·연산 묶음, 접근 제한, 변경 영향 감소입니다.",
    "source": 2,
    "page": 7
  },
  {
    "id": "q375",
    "category": "운영체제",
    "type": "essay",
    "prompt": "페이징과 세그먼테이션의 분할 단위 차이를 서술하시오.",
    "answer": "페이징은 프로그램과 메모리를 고정 크기 단위로 나누고, 세그먼테이션은 함수나 데이터 등 의미 있는 논리 단위를 서로 다른 크기로 나눈다.",
    "aliases": [
      "페이징은 프로그램과 메모리를 고정 크기 단위로 나누고, 세그먼테이션은 함수나 데이터 등 의미 있는 논리 단위를 서로 다른 크기로 나눈다."
    ],
    "explanation": "핵심: 페이징은 고정 크기, 세그먼테이션은 가변 크기 논리 단위입니다.",
    "source": 2,
    "page": 13
  },
  {
    "id": "q376",
    "category": "운영체제",
    "type": "essay",
    "prompt": "스래싱이 발생하는 상황과 성능이 저하되는 이유를 서술하시오.",
    "answer": "필요한 페이지에 비해 프레임이 부족하여 페이지 부재가 빈번해지고, CPU가 실제 작업보다 페이지 교체에 많은 시간을 소비하여 성능이 떨어지는 현상이다.",
    "aliases": [
      "필요한 페이지에 비해 프레임이 부족하여 페이지 부재가 빈번해지고, CPU가 실제 작업보다 페이지 교체에 많은 시간을 소비하여 성능이 떨어지는 현상이다."
    ],
    "explanation": "핵심: 잦은 페이지 부재와 교체로 인한 처리 시간 감소입니다.",
    "source": 2,
    "page": 13
  },
  {
    "id": "q377",
    "category": "보안",
    "type": "essay",
    "prompt": "대칭키 암호화와 비대칭키 암호화의 키 사용 방식 차이를 서술하시오.",
    "answer": "대칭키는 암호화와 복호화에 같은 키를 사용한다. 비대칭키는 공개키와 개인키의 쌍을 사용하며 한 키로 암호화한 내용을 대응되는 다른 키로 복호화한다.",
    "aliases": [
      "대칭키는 암호화와 복호화에 같은 키를 사용한다. 비대칭키는 공개키와 개인키의 쌍을 사용하며 한 키로 암호화한 내용을 대응되는 다른 키로 복호화한다."
    ],
    "explanation": "핵심: 동일한 키와 공개키·개인키 쌍의 차이입니다.",
    "source": 2,
    "page": 18
  },
  {
    "id": "q378",
    "category": "네트워크",
    "type": "essay",
    "prompt": "TCP와 UDP의 연결 및 신뢰성 측면 차이를 서술하시오.",
    "answer": "TCP는 연결을 설정하고 순서 제어 및 재전송 등으로 신뢰성 있는 전송을 제공한다. UDP는 연결 설정 없이 데이터그램을 보내며 전달이나 순서를 자체적으로 보장하지 않는다.",
    "aliases": [
      "TCP는 연결을 설정하고 순서 제어 및 재전송 등으로 신뢰성 있는 전송을 제공한다. UDP는 연결 설정 없이 데이터그램을 보내며 전달이나 순서를 자체적으로 보장하지 않는다."
    ],
    "explanation": "핵심: TCP는 연결 지향·신뢰성, UDP는 비연결·보장 없음입니다.",
    "source": 2,
    "page": 16
  },
  {
    "id": "q379",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "다음 설명에 해당하는 GoF 디자인 패턴의 명칭을 쓰시오.\n\n서로 관련된 객체들을 제품군 단위로 생성한다. 구체 클래스에 직접 의존하지 않는 생성 인터페이스를 제공한다.",
    "answer": "추상 팩토리",
    "aliases": [
      "추상 팩토리",
      "Abstract Factory",
      "추상 팩토리 패턴",
      "Abstract Factory Pattern"
    ],
    "explanation": "추상 팩토리는 GoF의 생성 패턴입니다. 팩토리 메서드는 생성 메서드를 하위 클래스에서 결정하고, 추상 팩토리는 연관된 제품군을 생성합니다.",
    "source": 1,
    "page": 39,
    "topic": "pattern",
    "concept": "abstract-factory",
    "exercise": "description",
    "patternGroup": "생성",
    "examEvidence": {
      "source": 1,
      "page": 39,
      "dates": [
        "2024.4"
      ],
      "topic": "추상 팩토리",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-pattern-abstract-factory"
  },
  {
    "id": "q380",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "운영체제별로 어울리는 버튼과 창을 한 묶음으로 생성해야 한다. 제품군을 통째로 바꿀 수 있게 만들 때 적합한 패턴의 명칭을 쓰시오.",
    "answer": "추상 팩토리",
    "aliases": [
      "추상 팩토리",
      "Abstract Factory",
      "추상 팩토리 패턴",
      "Abstract Factory Pattern"
    ],
    "explanation": "추상 팩토리는 GoF의 생성 패턴입니다. 팩토리 메서드는 생성 메서드를 하위 클래스에서 결정하고, 추상 팩토리는 연관된 제품군을 생성합니다.",
    "source": 1,
    "page": 39,
    "topic": "pattern",
    "concept": "abstract-factory",
    "exercise": "scenario",
    "patternGroup": "생성",
    "examEvidence": {
      "source": 1,
      "page": 39,
      "dates": [
        "2024.4"
      ],
      "topic": "추상 팩토리",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-pattern-abstract-factory"
  },
  {
    "id": "q381",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "GoF 디자인 패턴 중 추상 팩토리(Abstract Factory)는 생성·구조·행위 중 어느 분류에 속하는가? 분류명을 쓰시오.",
    "answer": "생성",
    "aliases": [
      "생성",
      "생성 패턴",
      "Creational"
    ],
    "explanation": "추상 팩토리는 생성 패턴입니다. 서로 관련된 객체들을 제품군 단위로 생성한다. 구체 클래스에 직접 의존하지 않는 생성 인터페이스를 제공한다.",
    "source": 1,
    "page": 39,
    "topic": "pattern",
    "concept": "abstract-factory",
    "exercise": "classification",
    "patternGroup": "생성"
  },
  {
    "id": "q382",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "다음 설명에 해당하는 GoF 디자인 패턴의 명칭을 쓰시오.\n\n복잡한 객체를 단계별로 조립한다. 생성 절차와 완성된 표현을 분리할 수 있다.",
    "answer": "빌더",
    "aliases": [
      "빌더",
      "Builder",
      "빌더 패턴",
      "Builder Pattern"
    ],
    "explanation": "빌더는 GoF의 생성 패턴입니다. 빌더는 단계별 조립, 추상 팩토리는 관련 제품군의 생성에 초점을 둡니다.",
    "source": 1,
    "page": 39,
    "topic": "pattern",
    "concept": "builder",
    "exercise": "description",
    "patternGroup": "생성"
  },
  {
    "id": "q383",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "문서의 제목, 본문, 첨부 파일을 차례로 설정하고 마지막 단계에서 완성된 문서 객체를 만든다. 이 생성 패턴의 명칭을 쓰시오.",
    "answer": "빌더",
    "aliases": [
      "빌더",
      "Builder",
      "빌더 패턴",
      "Builder Pattern"
    ],
    "explanation": "빌더는 GoF의 생성 패턴입니다. 빌더는 단계별 조립, 추상 팩토리는 관련 제품군의 생성에 초점을 둡니다.",
    "source": 1,
    "page": 39,
    "topic": "pattern",
    "concept": "builder",
    "exercise": "scenario",
    "patternGroup": "생성"
  },
  {
    "id": "q384",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "GoF 디자인 패턴 중 빌더(Builder)는 생성·구조·행위 중 어느 분류에 속하는가? 분류명을 쓰시오.",
    "answer": "생성",
    "aliases": [
      "생성",
      "생성 패턴",
      "Creational"
    ],
    "explanation": "빌더는 생성 패턴입니다. 복잡한 객체를 단계별로 조립한다. 생성 절차와 완성된 표현을 분리할 수 있다.",
    "source": 1,
    "page": 39,
    "topic": "pattern",
    "concept": "builder",
    "exercise": "classification",
    "patternGroup": "생성"
  },
  {
    "id": "q385",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "다음 설명에 해당하는 GoF 디자인 패턴의 명칭을 쓰시오.\n\n상위 클래스가 생성 메서드의 틀을 제공하고 실제로 만들 객체의 클래스는 하위 클래스가 결정한다.",
    "answer": "팩토리 메서드",
    "aliases": [
      "팩토리 메서드",
      "Factory Method",
      "팩토리 메서드 패턴",
      "Factory Method Pattern",
      "팩토리 메소드"
    ],
    "explanation": "팩토리 메서드는 GoF의 생성 패턴입니다. 객체 생성의 결정을 하위 클래스로 위임한다는 단서가 핵심입니다.",
    "source": 1,
    "page": 39,
    "topic": "pattern",
    "concept": "factory-method",
    "exercise": "description",
    "patternGroup": "생성",
    "examEvidence": {
      "source": 1,
      "page": 39,
      "dates": [
        "2021.10"
      ],
      "topic": "팩토리 메서드",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-pattern-factory-method"
  },
  {
    "id": "q386",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "파일을 여는 공통 흐름은 상위 클래스에 두고 PDF와 이미지 중 어떤 문서 객체를 만들지는 하위 클래스가 결정한다. 적용할 생성 패턴을 쓰시오.",
    "answer": "팩토리 메서드",
    "aliases": [
      "팩토리 메서드",
      "Factory Method",
      "팩토리 메서드 패턴",
      "Factory Method Pattern",
      "팩토리 메소드"
    ],
    "explanation": "팩토리 메서드는 GoF의 생성 패턴입니다. 객체 생성의 결정을 하위 클래스로 위임한다는 단서가 핵심입니다.",
    "source": 1,
    "page": 39,
    "topic": "pattern",
    "concept": "factory-method",
    "exercise": "scenario",
    "patternGroup": "생성",
    "examEvidence": {
      "source": 1,
      "page": 39,
      "dates": [
        "2021.10"
      ],
      "topic": "팩토리 메서드",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-pattern-factory-method"
  },
  {
    "id": "q387",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "GoF 디자인 패턴 중 팩토리 메서드(Factory Method)는 생성·구조·행위 중 어느 분류에 속하는가? 분류명을 쓰시오.",
    "answer": "생성",
    "aliases": [
      "생성",
      "생성 패턴",
      "Creational"
    ],
    "explanation": "팩토리 메서드는 생성 패턴입니다. 상위 클래스가 생성 메서드의 틀을 제공하고 실제로 만들 객체의 클래스는 하위 클래스가 결정한다.",
    "source": 1,
    "page": 39,
    "topic": "pattern",
    "concept": "factory-method",
    "exercise": "classification",
    "patternGroup": "생성"
  },
  {
    "id": "q388",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "다음 설명에 해당하는 GoF 디자인 패턴의 명칭을 쓰시오.\n\n기존 객체를 복제하여 새 객체를 만든다. 초기화 비용이 큰 객체를 재사용할 때 유용하다.",
    "answer": "프로토타입",
    "aliases": [
      "프로토타입",
      "Prototype",
      "프로토타입 패턴",
      "Prototype Pattern"
    ],
    "explanation": "프로토타입는 GoF의 생성 패턴입니다. 시제품으로 요구사항을 확인하는 개발 모형과 이름은 같지만, GoF에서는 객체 복제 방식입니다.",
    "source": 1,
    "page": 39,
    "topic": "pattern",
    "concept": "prototype",
    "exercise": "description",
    "patternGroup": "생성"
  },
  {
    "id": "q389",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "게임의 기본 몬스터 객체를 복제한 뒤 색상과 체력만 바꾸어 새로운 몬스터를 만든다. 이 생성 패턴의 명칭을 쓰시오.",
    "answer": "프로토타입",
    "aliases": [
      "프로토타입",
      "Prototype",
      "프로토타입 패턴",
      "Prototype Pattern"
    ],
    "explanation": "프로토타입는 GoF의 생성 패턴입니다. 시제품으로 요구사항을 확인하는 개발 모형과 이름은 같지만, GoF에서는 객체 복제 방식입니다.",
    "source": 1,
    "page": 39,
    "topic": "pattern",
    "concept": "prototype",
    "exercise": "scenario",
    "patternGroup": "생성"
  },
  {
    "id": "q390",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "GoF 디자인 패턴 중 프로토타입(Prototype)는 생성·구조·행위 중 어느 분류에 속하는가? 분류명을 쓰시오.",
    "answer": "생성",
    "aliases": [
      "생성",
      "생성 패턴",
      "Creational"
    ],
    "explanation": "프로토타입는 생성 패턴입니다. 기존 객체를 복제하여 새 객체를 만든다. 초기화 비용이 큰 객체를 재사용할 때 유용하다.",
    "source": 1,
    "page": 39,
    "topic": "pattern",
    "concept": "prototype",
    "exercise": "classification",
    "patternGroup": "생성"
  },
  {
    "id": "q391",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "다음 설명에 해당하는 GoF 디자인 패턴의 명칭을 쓰시오.\n\n클래스의 인스턴스가 하나만 존재하도록 하고 공통 접근 지점을 제공한다.",
    "answer": "싱글톤",
    "aliases": [
      "싱글톤",
      "Singleton",
      "싱글톤 패턴",
      "Singleton Pattern",
      "싱글턴"
    ],
    "explanation": "싱글톤는 GoF의 생성 패턴입니다. 공유 인스턴스 한 개를 보장하는 것이 핵심입니다. 플라이웨이트는 여러 객체의 공통 상태를 공유합니다.",
    "source": 1,
    "page": 39,
    "topic": "pattern",
    "concept": "singleton",
    "exercise": "description",
    "patternGroup": "생성"
  },
  {
    "id": "q392",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "애플리케이션의 설정 관리 객체를 하나만 만들고 모든 모듈이 같은 객체에 접근하게 한다. 이 생성 패턴을 쓰시오.",
    "answer": "싱글톤",
    "aliases": [
      "싱글톤",
      "Singleton",
      "싱글톤 패턴",
      "Singleton Pattern",
      "싱글턴"
    ],
    "explanation": "싱글톤는 GoF의 생성 패턴입니다. 공유 인스턴스 한 개를 보장하는 것이 핵심입니다. 플라이웨이트는 여러 객체의 공통 상태를 공유합니다.",
    "source": 1,
    "page": 39,
    "topic": "pattern",
    "concept": "singleton",
    "exercise": "scenario",
    "patternGroup": "생성"
  },
  {
    "id": "q393",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "GoF 디자인 패턴 중 싱글톤(Singleton)는 생성·구조·행위 중 어느 분류에 속하는가? 분류명을 쓰시오.",
    "answer": "생성",
    "aliases": [
      "생성",
      "생성 패턴",
      "Creational"
    ],
    "explanation": "싱글톤는 생성 패턴입니다. 클래스의 인스턴스가 하나만 존재하도록 하고 공통 접근 지점을 제공한다.",
    "source": 1,
    "page": 39,
    "topic": "pattern",
    "concept": "singleton",
    "exercise": "classification",
    "patternGroup": "생성"
  },
  {
    "id": "q394",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "다음 설명에 해당하는 GoF 디자인 패턴의 명칭을 쓰시오.\n\n기존 클래스의 인터페이스를 이용자가 기대하는 인터페이스로 변환한다.",
    "answer": "어댑터",
    "aliases": [
      "어댑터",
      "Adapter",
      "어댑터 패턴",
      "Adapter Pattern"
    ],
    "explanation": "어댑터는 GoF의 구조 패턴입니다. 어댑터는 인터페이스 호환, 퍼사드는 복잡한 기능의 사용 단순화가 목적입니다.",
    "source": 1,
    "page": 39,
    "topic": "pattern",
    "concept": "adapter",
    "exercise": "description",
    "patternGroup": "구조",
    "examEvidence": {
      "source": 1,
      "page": 39,
      "dates": [
        "2025.4"
      ],
      "topic": "어댑터",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-pattern-adapter"
  },
  {
    "id": "q395",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "기존 결제 라이브러리는 payAmount를 제공하지만 새 시스템은 checkout을 요구한다. 기존 라이브러리를 감싸 호출 규격을 맞추는 패턴을 쓰시오.",
    "answer": "어댑터",
    "aliases": [
      "어댑터",
      "Adapter",
      "어댑터 패턴",
      "Adapter Pattern"
    ],
    "explanation": "어댑터는 GoF의 구조 패턴입니다. 어댑터는 인터페이스 호환, 퍼사드는 복잡한 기능의 사용 단순화가 목적입니다.",
    "source": 1,
    "page": 39,
    "topic": "pattern",
    "concept": "adapter",
    "exercise": "scenario",
    "patternGroup": "구조",
    "examEvidence": {
      "source": 1,
      "page": 39,
      "dates": [
        "2025.4"
      ],
      "topic": "어댑터",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-pattern-adapter"
  },
  {
    "id": "q396",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "GoF 디자인 패턴 중 어댑터(Adapter)는 생성·구조·행위 중 어느 분류에 속하는가? 분류명을 쓰시오.",
    "answer": "구조",
    "aliases": [
      "구조",
      "구조 패턴",
      "Structural"
    ],
    "explanation": "어댑터는 구조 패턴입니다. 기존 클래스의 인터페이스를 이용자가 기대하는 인터페이스로 변환한다.",
    "source": 1,
    "page": 39,
    "topic": "pattern",
    "concept": "adapter",
    "exercise": "classification",
    "patternGroup": "구조"
  },
  {
    "id": "q397",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "다음 설명에 해당하는 GoF 디자인 패턴의 명칭을 쓰시오.\n\n추상화와 구현을 분리하여 두 부분을 서로 독립적으로 확장하게 한다.",
    "answer": "브리지",
    "aliases": [
      "브리지",
      "Bridge",
      "브리지 패턴",
      "Bridge Pattern"
    ],
    "explanation": "브리지는 GoF의 구조 패턴입니다. 브리지는 처음부터 추상화와 구현을 분리합니다. 어댑터는 이미 다른 인터페이스 사이를 맞춥니다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "bridge",
    "exercise": "description",
    "patternGroup": "구조",
    "examEvidence": {
      "source": 1,
      "page": 40,
      "dates": [
        "2022.10"
      ],
      "topic": "브리지",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-pattern-bridge"
  },
  {
    "id": "q398",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "도형의 종류와 그리는 방식이 각각 계속 늘어난다. 도형 계층과 렌더러 계층을 분리하여 모든 조합의 하위 클래스를 만들지 않도록 하는 패턴을 쓰시오.",
    "answer": "브리지",
    "aliases": [
      "브리지",
      "Bridge",
      "브리지 패턴",
      "Bridge Pattern"
    ],
    "explanation": "브리지는 GoF의 구조 패턴입니다. 브리지는 처음부터 추상화와 구현을 분리합니다. 어댑터는 이미 다른 인터페이스 사이를 맞춥니다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "bridge",
    "exercise": "scenario",
    "patternGroup": "구조",
    "examEvidence": {
      "source": 1,
      "page": 40,
      "dates": [
        "2022.10"
      ],
      "topic": "브리지",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-pattern-bridge"
  },
  {
    "id": "q399",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "GoF 디자인 패턴 중 브리지(Bridge)는 생성·구조·행위 중 어느 분류에 속하는가? 분류명을 쓰시오.",
    "answer": "구조",
    "aliases": [
      "구조",
      "구조 패턴",
      "Structural"
    ],
    "explanation": "브리지는 구조 패턴입니다. 추상화와 구현을 분리하여 두 부분을 서로 독립적으로 확장하게 한다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "bridge",
    "exercise": "classification",
    "patternGroup": "구조"
  },
  {
    "id": "q400",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "다음 설명에 해당하는 GoF 디자인 패턴의 명칭을 쓰시오.\n\n단일 객체와 복합 객체를 같은 인터페이스로 다룬다. 전체와 부분을 트리로 구성한다.",
    "answer": "컴포지트",
    "aliases": [
      "컴포지트",
      "Composite",
      "컴포지트 패턴",
      "Composite Pattern"
    ],
    "explanation": "컴포지트는 GoF의 구조 패턴입니다. 전체·부분의 트리 구조와 단일·복합 객체의 동일한 처리가 핵심입니다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "composite",
    "exercise": "description",
    "patternGroup": "구조"
  },
  {
    "id": "q401",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "파일과 폴더를 트리로 표현하고 파일 하나와 여러 파일을 담은 폴더 모두 같은 작업 인터페이스로 처리한다. 적용할 패턴을 쓰시오.",
    "answer": "컴포지트",
    "aliases": [
      "컴포지트",
      "Composite",
      "컴포지트 패턴",
      "Composite Pattern"
    ],
    "explanation": "컴포지트는 GoF의 구조 패턴입니다. 전체·부분의 트리 구조와 단일·복합 객체의 동일한 처리가 핵심입니다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "composite",
    "exercise": "scenario",
    "patternGroup": "구조"
  },
  {
    "id": "q402",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "GoF 디자인 패턴 중 컴포지트(Composite)는 생성·구조·행위 중 어느 분류에 속하는가? 분류명을 쓰시오.",
    "answer": "구조",
    "aliases": [
      "구조",
      "구조 패턴",
      "Structural"
    ],
    "explanation": "컴포지트는 구조 패턴입니다. 단일 객체와 복합 객체를 같은 인터페이스로 다룬다. 전체와 부분을 트리로 구성한다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "composite",
    "exercise": "classification",
    "patternGroup": "구조"
  },
  {
    "id": "q403",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "다음 설명에 해당하는 GoF 디자인 패턴의 명칭을 쓰시오.\n\n객체를 감싸는 방식으로 부가 기능을 동적으로 추가한다. 기본 인터페이스는 유지한다.",
    "answer": "데코레이터",
    "aliases": [
      "데코레이터",
      "Decorator",
      "데코레이터 패턴",
      "Decorator Pattern"
    ],
    "explanation": "데코레이터는 GoF의 구조 패턴입니다. 데코레이터는 부가 기능을 추가합니다. 프록시는 원본에 대한 접근을 대신 관리합니다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "decorator",
    "exercise": "description",
    "patternGroup": "구조"
  },
  {
    "id": "q404",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "기본 데이터 스트림에 압축 기능과 암호화 기능을 필요에 따라 겹겹이 덧붙인다. 기능을 동적으로 추가하는 패턴을 쓰시오.",
    "answer": "데코레이터",
    "aliases": [
      "데코레이터",
      "Decorator",
      "데코레이터 패턴",
      "Decorator Pattern"
    ],
    "explanation": "데코레이터는 GoF의 구조 패턴입니다. 데코레이터는 부가 기능을 추가합니다. 프록시는 원본에 대한 접근을 대신 관리합니다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "decorator",
    "exercise": "scenario",
    "patternGroup": "구조"
  },
  {
    "id": "q405",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "GoF 디자인 패턴 중 데코레이터(Decorator)는 생성·구조·행위 중 어느 분류에 속하는가? 분류명을 쓰시오.",
    "answer": "구조",
    "aliases": [
      "구조",
      "구조 패턴",
      "Structural"
    ],
    "explanation": "데코레이터는 구조 패턴입니다. 객체를 감싸는 방식으로 부가 기능을 동적으로 추가한다. 기본 인터페이스는 유지한다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "decorator",
    "exercise": "classification",
    "patternGroup": "구조"
  },
  {
    "id": "q406",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "다음 설명에 해당하는 GoF 디자인 패턴의 명칭을 쓰시오.\n\n여러 하위 시스템을 쉽게 이용하도록 단순한 상위 인터페이스를 제공한다.",
    "answer": "퍼사드",
    "aliases": [
      "퍼사드",
      "Facade",
      "퍼사드 패턴",
      "Facade Pattern",
      "파사드",
      "퍼싸드"
    ],
    "explanation": "퍼사드는 GoF의 구조 패턴입니다. 퍼사드는 복잡한 시스템의 사용을 단순하게 합니다. 어댑터는 호출 규격을 맞춥니다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "facade",
    "exercise": "description",
    "patternGroup": "구조"
  },
  {
    "id": "q407",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "동영상 변환에 필요한 코덱, 음성 처리, 파일 저장의 복잡한 호출을 convert 하나로 묶어 제공한다. 적용할 패턴을 쓰시오.",
    "answer": "퍼사드",
    "aliases": [
      "퍼사드",
      "Facade",
      "퍼사드 패턴",
      "Facade Pattern",
      "파사드",
      "퍼싸드"
    ],
    "explanation": "퍼사드는 GoF의 구조 패턴입니다. 퍼사드는 복잡한 시스템의 사용을 단순하게 합니다. 어댑터는 호출 규격을 맞춥니다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "facade",
    "exercise": "scenario",
    "patternGroup": "구조"
  },
  {
    "id": "q408",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "GoF 디자인 패턴 중 퍼사드(Facade)는 생성·구조·행위 중 어느 분류에 속하는가? 분류명을 쓰시오.",
    "answer": "구조",
    "aliases": [
      "구조",
      "구조 패턴",
      "Structural"
    ],
    "explanation": "퍼사드는 구조 패턴입니다. 여러 하위 시스템을 쉽게 이용하도록 단순한 상위 인터페이스를 제공한다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "facade",
    "exercise": "classification",
    "patternGroup": "구조"
  },
  {
    "id": "q409",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "다음 설명에 해당하는 GoF 디자인 패턴의 명칭을 쓰시오.\n\n많은 객체가 공통으로 사용하는 상태를 공유하여 메모리를 줄인다.",
    "answer": "플라이웨이트",
    "aliases": [
      "플라이웨이트",
      "Flyweight",
      "플라이웨이트 패턴",
      "Flyweight Pattern"
    ],
    "explanation": "플라이웨이트는 GoF의 구조 패턴입니다. 플라이웨이트는 공통 상태 공유, 싱글톤은 클래스 인스턴스 수 제한입니다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "flyweight",
    "exercise": "description",
    "patternGroup": "구조"
  },
  {
    "id": "q410",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "문서의 글자마다 글꼴 데이터를 복사하지 않고 동일한 글꼴 정보를 공유한다. 적용할 패턴을 쓰시오.",
    "answer": "플라이웨이트",
    "aliases": [
      "플라이웨이트",
      "Flyweight",
      "플라이웨이트 패턴",
      "Flyweight Pattern"
    ],
    "explanation": "플라이웨이트는 GoF의 구조 패턴입니다. 플라이웨이트는 공통 상태 공유, 싱글톤은 클래스 인스턴스 수 제한입니다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "flyweight",
    "exercise": "scenario",
    "patternGroup": "구조"
  },
  {
    "id": "q411",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "GoF 디자인 패턴 중 플라이웨이트(Flyweight)는 생성·구조·행위 중 어느 분류에 속하는가? 분류명을 쓰시오.",
    "answer": "구조",
    "aliases": [
      "구조",
      "구조 패턴",
      "Structural"
    ],
    "explanation": "플라이웨이트는 구조 패턴입니다. 많은 객체가 공통으로 사용하는 상태를 공유하여 메모리를 줄인다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "flyweight",
    "exercise": "classification",
    "patternGroup": "구조"
  },
  {
    "id": "q412",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "다음 설명에 해당하는 GoF 디자인 패턴의 명칭을 쓰시오.\n\n실제 객체를 대신하는 대리 객체로 접근을 제어한다. 지연 생성이나 권한 확인 등을 맡길 수 있다.",
    "answer": "프록시",
    "aliases": [
      "프록시",
      "Proxy",
      "프록시 패턴",
      "Proxy Pattern",
      "프록시",
      "프록씨"
    ],
    "explanation": "프록시는 GoF의 구조 패턴입니다. 프록시는 원본 접근을 대신합니다. 데코레이터는 원본 동작에 기능을 덧붙입니다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "proxy",
    "exercise": "description",
    "patternGroup": "구조",
    "examEvidence": {
      "source": 1,
      "page": 40,
      "dates": [
        "2025.7",
        "2023.4"
      ],
      "topic": "프록시",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-pattern-proxy"
  },
  {
    "id": "q413",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "큰 이미지는 화면에 표시할 때까지 로딩하지 않고, 먼저 가벼운 대리 객체가 이미지 요청을 받는다. 적용할 패턴을 쓰시오.",
    "answer": "프록시",
    "aliases": [
      "프록시",
      "Proxy",
      "프록시 패턴",
      "Proxy Pattern",
      "프록시",
      "프록씨"
    ],
    "explanation": "프록시는 GoF의 구조 패턴입니다. 프록시는 원본 접근을 대신합니다. 데코레이터는 원본 동작에 기능을 덧붙입니다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "proxy",
    "exercise": "scenario",
    "patternGroup": "구조",
    "examEvidence": {
      "source": 1,
      "page": 40,
      "dates": [
        "2025.7",
        "2023.4"
      ],
      "topic": "프록시",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-pattern-proxy"
  },
  {
    "id": "q414",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "GoF 디자인 패턴 중 프록시(Proxy)는 생성·구조·행위 중 어느 분류에 속하는가? 분류명을 쓰시오.",
    "answer": "구조",
    "aliases": [
      "구조",
      "구조 패턴",
      "Structural"
    ],
    "explanation": "프록시는 구조 패턴입니다. 실제 객체를 대신하는 대리 객체로 접근을 제어한다. 지연 생성이나 권한 확인 등을 맡길 수 있다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "proxy",
    "exercise": "classification",
    "patternGroup": "구조"
  },
  {
    "id": "q415",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "다음 설명에 해당하는 GoF 디자인 패턴의 명칭을 쓰시오.\n\n여러 처리자를 연결하여 요청을 처리할 수 있는 객체로 순서대로 전달한다.",
    "answer": "책임 연쇄",
    "aliases": [
      "책임 연쇄",
      "Chain of Responsibility",
      "책임 연쇄 패턴",
      "Chain of Responsibility Pattern"
    ],
    "explanation": "책임 연쇄는 GoF의 행위 패턴입니다. 처리자들의 연결을 따라 책임이 이동하는 것이 핵심입니다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "chain-of-responsibility",
    "exercise": "description",
    "patternGroup": "행위"
  },
  {
    "id": "q416",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "고객 문의를 상담원에게 보내고 처리 권한이 없으면 팀장, 그다음 관리자에게 전달한다. 적용할 패턴을 쓰시오.",
    "answer": "책임 연쇄",
    "aliases": [
      "책임 연쇄",
      "Chain of Responsibility",
      "책임 연쇄 패턴",
      "Chain of Responsibility Pattern"
    ],
    "explanation": "책임 연쇄는 GoF의 행위 패턴입니다. 처리자들의 연결을 따라 책임이 이동하는 것이 핵심입니다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "chain-of-responsibility",
    "exercise": "scenario",
    "patternGroup": "행위"
  },
  {
    "id": "q417",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "GoF 디자인 패턴 중 책임 연쇄(Chain of Responsibility)는 생성·구조·행위 중 어느 분류에 속하는가? 분류명을 쓰시오.",
    "answer": "행위",
    "aliases": [
      "행위",
      "행위 패턴",
      "Behavioral"
    ],
    "explanation": "책임 연쇄는 행위 패턴입니다. 여러 처리자를 연결하여 요청을 처리할 수 있는 객체로 순서대로 전달한다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "chain-of-responsibility",
    "exercise": "classification",
    "patternGroup": "행위"
  },
  {
    "id": "q418",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "다음 설명에 해당하는 GoF 디자인 패턴의 명칭을 쓰시오.\n\n요청을 객체로 캡슐화하여 실행, 저장, 취소 등을 독립적으로 다룬다.",
    "answer": "커맨드",
    "aliases": [
      "커맨드",
      "Command",
      "커맨드 패턴",
      "Command Pattern",
      "명령"
    ],
    "explanation": "커맨드는 GoF의 행위 패턴입니다. 커맨드는 요청 자체를 객체로 만듭니다. 메멘토는 객체 상태의 저장·복원이 핵심입니다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "command",
    "exercise": "description",
    "patternGroup": "행위"
  },
  {
    "id": "q419",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "메뉴와 단축키가 같은 실행 객체를 호출하고, 실행한 요청을 목록에 저장하여 취소 기능을 구현한다. 요청 객체화 패턴의 명칭을 쓰시오.",
    "answer": "커맨드",
    "aliases": [
      "커맨드",
      "Command",
      "커맨드 패턴",
      "Command Pattern",
      "명령"
    ],
    "explanation": "커맨드는 GoF의 행위 패턴입니다. 커맨드는 요청 자체를 객체로 만듭니다. 메멘토는 객체 상태의 저장·복원이 핵심입니다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "command",
    "exercise": "scenario",
    "patternGroup": "행위"
  },
  {
    "id": "q420",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "GoF 디자인 패턴 중 커맨드(Command)는 생성·구조·행위 중 어느 분류에 속하는가? 분류명을 쓰시오.",
    "answer": "행위",
    "aliases": [
      "행위",
      "행위 패턴",
      "Behavioral"
    ],
    "explanation": "커맨드는 행위 패턴입니다. 요청을 객체로 캡슐화하여 실행, 저장, 취소 등을 독립적으로 다룬다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "command",
    "exercise": "classification",
    "patternGroup": "행위"
  },
  {
    "id": "q421",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "다음 설명에 해당하는 GoF 디자인 패턴의 명칭을 쓰시오.\n\n간단한 언어의 문법 규칙을 표현하고 그 규칙에 따라 문장을 해석한다.",
    "answer": "인터프리터",
    "aliases": [
      "인터프리터",
      "Interpreter",
      "인터프리터 패턴",
      "Interpreter Pattern"
    ],
    "explanation": "인터프리터는 GoF의 행위 패턴입니다. 여기서는 GoF의 문법 규칙 및 해석 패턴을 묻습니다. 아키텍처의 해석기 구성과 범위를 구분하세요.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "interpreter",
    "exercise": "description",
    "patternGroup": "행위"
  },
  {
    "id": "q422",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "사용자가 입력한 간단한 계산식의 문법 규칙을 객체로 표현하여 해석기를 만든다. 적용할 GoF 행위 패턴을 쓰시오.",
    "answer": "인터프리터",
    "aliases": [
      "인터프리터",
      "Interpreter",
      "인터프리터 패턴",
      "Interpreter Pattern"
    ],
    "explanation": "인터프리터는 GoF의 행위 패턴입니다. 여기서는 GoF의 문법 규칙 및 해석 패턴을 묻습니다. 아키텍처의 해석기 구성과 범위를 구분하세요.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "interpreter",
    "exercise": "scenario",
    "patternGroup": "행위"
  },
  {
    "id": "q423",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "GoF 디자인 패턴 중 인터프리터(Interpreter)는 생성·구조·행위 중 어느 분류에 속하는가? 분류명을 쓰시오.",
    "answer": "행위",
    "aliases": [
      "행위",
      "행위 패턴",
      "Behavioral"
    ],
    "explanation": "인터프리터는 행위 패턴입니다. 간단한 언어의 문법 규칙을 표현하고 그 규칙에 따라 문장을 해석한다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "interpreter",
    "exercise": "classification",
    "patternGroup": "행위"
  },
  {
    "id": "q424",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "다음 설명에 해당하는 GoF 디자인 패턴의 명칭을 쓰시오.\n\n컬렉션의 내부 표현을 공개하지 않고 요소를 순서대로 탐색한다.",
    "answer": "반복자",
    "aliases": [
      "반복자",
      "Iterator",
      "반복자 패턴",
      "Iterator Pattern",
      "이터레이터"
    ],
    "explanation": "반복자는 GoF의 행위 패턴입니다. 컬렉션의 내부 구조와 탐색 과정을 분리합니다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "iterator",
    "exercise": "description",
    "patternGroup": "행위",
    "examEvidence": {
      "source": 1,
      "page": 40,
      "dates": [
        "2024.7"
      ],
      "topic": "반복자",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-pattern-iterator"
  },
  {
    "id": "q425",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "자료가 배열인지 연결 리스트인지 몰라도 같은 순회 인터페이스로 원소를 하나씩 읽는다. 적용할 패턴을 쓰시오.",
    "answer": "반복자",
    "aliases": [
      "반복자",
      "Iterator",
      "반복자 패턴",
      "Iterator Pattern",
      "이터레이터"
    ],
    "explanation": "반복자는 GoF의 행위 패턴입니다. 컬렉션의 내부 구조와 탐색 과정을 분리합니다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "iterator",
    "exercise": "scenario",
    "patternGroup": "행위",
    "examEvidence": {
      "source": 1,
      "page": 40,
      "dates": [
        "2024.7"
      ],
      "topic": "반복자",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-pattern-iterator"
  },
  {
    "id": "q426",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "GoF 디자인 패턴 중 반복자(Iterator)는 생성·구조·행위 중 어느 분류에 속하는가? 분류명을 쓰시오.",
    "answer": "행위",
    "aliases": [
      "행위",
      "행위 패턴",
      "Behavioral"
    ],
    "explanation": "반복자는 행위 패턴입니다. 컬렉션의 내부 표현을 공개하지 않고 요소를 순서대로 탐색한다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "iterator",
    "exercise": "classification",
    "patternGroup": "행위"
  },
  {
    "id": "q427",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "다음 설명에 해당하는 GoF 디자인 패턴의 명칭을 쓰시오.\n\n여러 객체의 상호작용을 중재 객체에 모아 객체 사이의 직접 의존을 줄인다.",
    "answer": "중재자",
    "aliases": [
      "중재자",
      "Mediator",
      "중재자 패턴",
      "Mediator Pattern"
    ],
    "explanation": "중재자는 GoF의 행위 패턴입니다. 중재자는 객체 사이의 조정, 옵서버는 상태 변화의 일대다 통지가 핵심입니다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "mediator",
    "exercise": "description",
    "patternGroup": "행위"
  },
  {
    "id": "q428",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "대화상자의 입력칸, 체크박스, 버튼이 서로 직접 참조하는 대신 하나의 조정 객체를 통해 상태를 맞춘다. 적용할 패턴을 쓰시오.",
    "answer": "중재자",
    "aliases": [
      "중재자",
      "Mediator",
      "중재자 패턴",
      "Mediator Pattern"
    ],
    "explanation": "중재자는 GoF의 행위 패턴입니다. 중재자는 객체 사이의 조정, 옵서버는 상태 변화의 일대다 통지가 핵심입니다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "mediator",
    "exercise": "scenario",
    "patternGroup": "행위"
  },
  {
    "id": "q429",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "GoF 디자인 패턴 중 중재자(Mediator)는 생성·구조·행위 중 어느 분류에 속하는가? 분류명을 쓰시오.",
    "answer": "행위",
    "aliases": [
      "행위",
      "행위 패턴",
      "Behavioral"
    ],
    "explanation": "중재자는 행위 패턴입니다. 여러 객체의 상호작용을 중재 객체에 모아 객체 사이의 직접 의존을 줄인다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "mediator",
    "exercise": "classification",
    "patternGroup": "행위"
  },
  {
    "id": "q430",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "다음 설명에 해당하는 GoF 디자인 패턴의 명칭을 쓰시오.\n\n객체 내부 상태를 보관하고 나중에 해당 시점의 상태로 복원한다.",
    "answer": "메멘토",
    "aliases": [
      "메멘토",
      "Memento",
      "메멘토 패턴",
      "Memento Pattern"
    ],
    "explanation": "메멘토는 GoF의 행위 패턴입니다. 메멘토는 상태 보관, 커맨드는 실행 요청의 객체화입니다.",
    "source": 1,
    "page": 41,
    "topic": "pattern",
    "concept": "memento",
    "exercise": "description",
    "patternGroup": "행위"
  },
  {
    "id": "q431",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "편집기의 특정 시점 상태를 스냅샷으로 저장했다가 이전 상태로 되돌린다. 상태 저장·복원에 적합한 패턴을 쓰시오.",
    "answer": "메멘토",
    "aliases": [
      "메멘토",
      "Memento",
      "메멘토 패턴",
      "Memento Pattern"
    ],
    "explanation": "메멘토는 GoF의 행위 패턴입니다. 메멘토는 상태 보관, 커맨드는 실행 요청의 객체화입니다.",
    "source": 1,
    "page": 41,
    "topic": "pattern",
    "concept": "memento",
    "exercise": "scenario",
    "patternGroup": "행위"
  },
  {
    "id": "q432",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "GoF 디자인 패턴 중 메멘토(Memento)는 생성·구조·행위 중 어느 분류에 속하는가? 분류명을 쓰시오.",
    "answer": "행위",
    "aliases": [
      "행위",
      "행위 패턴",
      "Behavioral"
    ],
    "explanation": "메멘토는 행위 패턴입니다. 객체 내부 상태를 보관하고 나중에 해당 시점의 상태로 복원한다.",
    "source": 1,
    "page": 41,
    "topic": "pattern",
    "concept": "memento",
    "exercise": "classification",
    "patternGroup": "행위"
  },
  {
    "id": "q433",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "다음 설명에 해당하는 GoF 디자인 패턴의 명칭을 쓰시오.\n\n관찰 대상의 상태가 바뀌면 등록된 관찰자들에게 알려 주는 일대다 관계를 정의한다.",
    "answer": "옵서버",
    "aliases": [
      "옵서버",
      "Observer",
      "옵서버 패턴",
      "Observer Pattern"
    ],
    "explanation": "옵서버는 GoF의 행위 패턴입니다. 옵서버는 구독자에게 상태 변화를 통지합니다. 중재자는 객체 간 상호작용을 조정합니다.",
    "source": 1,
    "page": 41,
    "topic": "pattern",
    "concept": "observer",
    "exercise": "description",
    "patternGroup": "행위",
    "examEvidence": {
      "source": 1,
      "page": 41,
      "dates": [
        "2022.10",
        "2020.7"
      ],
      "topic": "옵서버",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-pattern-observer"
  },
  {
    "id": "q434",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "주식 가격 객체가 변경되면 등록된 여러 화면에 변경을 알린다. 대상은 화면의 구체 클래스에 의존하지 않는다. 적용할 패턴을 쓰시오.",
    "answer": "옵서버",
    "aliases": [
      "옵서버",
      "Observer",
      "옵서버 패턴",
      "Observer Pattern"
    ],
    "explanation": "옵서버는 GoF의 행위 패턴입니다. 옵서버는 구독자에게 상태 변화를 통지합니다. 중재자는 객체 간 상호작용을 조정합니다.",
    "source": 1,
    "page": 41,
    "topic": "pattern",
    "concept": "observer",
    "exercise": "scenario",
    "patternGroup": "행위",
    "examEvidence": {
      "source": 1,
      "page": 41,
      "dates": [
        "2022.10",
        "2020.7"
      ],
      "topic": "옵서버",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-pattern-observer"
  },
  {
    "id": "q435",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "GoF 디자인 패턴 중 옵서버(Observer)는 생성·구조·행위 중 어느 분류에 속하는가? 분류명을 쓰시오.",
    "answer": "행위",
    "aliases": [
      "행위",
      "행위 패턴",
      "Behavioral"
    ],
    "explanation": "옵서버는 행위 패턴입니다. 관찰 대상의 상태가 바뀌면 등록된 관찰자들에게 알려 주는 일대다 관계를 정의한다.",
    "source": 1,
    "page": 41,
    "topic": "pattern",
    "concept": "observer",
    "exercise": "classification",
    "patternGroup": "행위"
  },
  {
    "id": "q436",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "다음 설명에 해당하는 GoF 디자인 패턴의 명칭을 쓰시오.\n\n객체의 현재 상태별 동작을 각각 캡슐화하여 동일한 요청이 상태에 따라 다르게 처리되게 한다.",
    "answer": "상태",
    "aliases": [
      "상태",
      "State",
      "상태 패턴",
      "State Pattern"
    ],
    "explanation": "상태는 GoF의 행위 패턴입니다. 상태는 객체의 상태에 따른 동작, 전략은 교체 가능한 알고리즘의 선택입니다.",
    "source": 1,
    "page": 41,
    "topic": "pattern",
    "concept": "state",
    "exercise": "description",
    "patternGroup": "행위"
  },
  {
    "id": "q437",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "자동판매기의 같은 버튼 입력이 대기, 결제 완료, 품절 상태에 따라 다른 동작을 하도록 상태별 객체에 위임한다. 적용할 패턴을 쓰시오.",
    "answer": "상태",
    "aliases": [
      "상태",
      "State",
      "상태 패턴",
      "State Pattern"
    ],
    "explanation": "상태는 GoF의 행위 패턴입니다. 상태는 객체의 상태에 따른 동작, 전략은 교체 가능한 알고리즘의 선택입니다.",
    "source": 1,
    "page": 41,
    "topic": "pattern",
    "concept": "state",
    "exercise": "scenario",
    "patternGroup": "행위"
  },
  {
    "id": "q438",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "GoF 디자인 패턴 중 상태(State)는 생성·구조·행위 중 어느 분류에 속하는가? 분류명을 쓰시오.",
    "answer": "행위",
    "aliases": [
      "행위",
      "행위 패턴",
      "Behavioral"
    ],
    "explanation": "상태는 행위 패턴입니다. 객체의 현재 상태별 동작을 각각 캡슐화하여 동일한 요청이 상태에 따라 다르게 처리되게 한다.",
    "source": 1,
    "page": 41,
    "topic": "pattern",
    "concept": "state",
    "exercise": "classification",
    "patternGroup": "행위"
  },
  {
    "id": "q439",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "다음 설명에 해당하는 GoF 디자인 패턴의 명칭을 쓰시오.\n\n같은 목적을 가진 여러 알고리즘을 캡슐화하여 상호 교환하게 한다.",
    "answer": "전략",
    "aliases": [
      "전략",
      "Strategy",
      "전략 패턴",
      "Strategy Pattern"
    ],
    "explanation": "전략는 GoF의 행위 패턴입니다. 전략은 알고리즘 교체, 상태는 상태 변화에 따른 동작 변경입니다.",
    "source": 1,
    "page": 41,
    "topic": "pattern",
    "concept": "strategy",
    "exercise": "description",
    "patternGroup": "행위"
  },
  {
    "id": "q440",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "가격 계산 시 정액 할인과 비율 할인 알고리즘을 별도 객체로 만들고 필요에 따라 선택한다. 적용할 패턴을 쓰시오.",
    "answer": "전략",
    "aliases": [
      "전략",
      "Strategy",
      "전략 패턴",
      "Strategy Pattern"
    ],
    "explanation": "전략는 GoF의 행위 패턴입니다. 전략은 알고리즘 교체, 상태는 상태 변화에 따른 동작 변경입니다.",
    "source": 1,
    "page": 41,
    "topic": "pattern",
    "concept": "strategy",
    "exercise": "scenario",
    "patternGroup": "행위"
  },
  {
    "id": "q441",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "GoF 디자인 패턴 중 전략(Strategy)는 생성·구조·행위 중 어느 분류에 속하는가? 분류명을 쓰시오.",
    "answer": "행위",
    "aliases": [
      "행위",
      "행위 패턴",
      "Behavioral"
    ],
    "explanation": "전략는 행위 패턴입니다. 같은 목적을 가진 여러 알고리즘을 캡슐화하여 상호 교환하게 한다.",
    "source": 1,
    "page": 41,
    "topic": "pattern",
    "concept": "strategy",
    "exercise": "classification",
    "patternGroup": "행위"
  },
  {
    "id": "q442",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "다음 설명에 해당하는 GoF 디자인 패턴의 명칭을 쓰시오.\n\n알고리즘의 공통 골격을 상위 클래스에 정의하고 일부 단계를 하위 클래스가 구현하게 한다.",
    "answer": "템플릿 메서드",
    "aliases": [
      "템플릿 메서드",
      "Template Method",
      "템플릿 메서드 패턴",
      "Template Method Pattern",
      "템플릿 메소드"
    ],
    "explanation": "템플릿 메서드는 GoF의 행위 패턴입니다. 템플릿 메서드는 상속으로 세부 단계를 바꿉니다. 전략은 알고리즘을 별도 객체로 교체합니다.",
    "source": 1,
    "page": 41,
    "topic": "pattern",
    "concept": "template-method",
    "exercise": "description",
    "patternGroup": "행위"
  },
  {
    "id": "q443",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "파일을 읽고 변환하고 저장하는 순서는 고정한다. 형식별로 달라지는 변환 단계만 하위 클래스에서 구현한다. 적용할 패턴을 쓰시오.",
    "answer": "템플릿 메서드",
    "aliases": [
      "템플릿 메서드",
      "Template Method",
      "템플릿 메서드 패턴",
      "Template Method Pattern",
      "템플릿 메소드"
    ],
    "explanation": "템플릿 메서드는 GoF의 행위 패턴입니다. 템플릿 메서드는 상속으로 세부 단계를 바꿉니다. 전략은 알고리즘을 별도 객체로 교체합니다.",
    "source": 1,
    "page": 41,
    "topic": "pattern",
    "concept": "template-method",
    "exercise": "scenario",
    "patternGroup": "행위"
  },
  {
    "id": "q444",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "GoF 디자인 패턴 중 템플릿 메서드(Template Method)는 생성·구조·행위 중 어느 분류에 속하는가? 분류명을 쓰시오.",
    "answer": "행위",
    "aliases": [
      "행위",
      "행위 패턴",
      "Behavioral"
    ],
    "explanation": "템플릿 메서드는 행위 패턴입니다. 알고리즘의 공통 골격을 상위 클래스에 정의하고 일부 단계를 하위 클래스가 구현하게 한다.",
    "source": 1,
    "page": 41,
    "topic": "pattern",
    "concept": "template-method",
    "exercise": "classification",
    "patternGroup": "행위"
  },
  {
    "id": "q445",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "다음 설명에 해당하는 GoF 디자인 패턴의 명칭을 쓰시오.\n\n객체 구조를 크게 바꾸지 않고 외부 방문 객체에 새로운 연산을 추가한다.",
    "answer": "방문자",
    "aliases": [
      "방문자",
      "Visitor",
      "방문자 패턴",
      "Visitor Pattern"
    ],
    "explanation": "방문자는 GoF의 행위 패턴입니다. 방문자는 처리 연산을 객체 구조와 분리합니다. 반복자는 원소 탐색에 초점을 둡니다.",
    "source": 1,
    "page": 41,
    "topic": "pattern",
    "concept": "visitor",
    "exercise": "description",
    "patternGroup": "행위"
  },
  {
    "id": "q446",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "문서 요소 클래스들은 유지한 채 HTML 내보내기와 통계 계산 같은 연산을 방문 객체로 추가한다. 적용할 패턴을 쓰시오.",
    "answer": "방문자",
    "aliases": [
      "방문자",
      "Visitor",
      "방문자 패턴",
      "Visitor Pattern"
    ],
    "explanation": "방문자는 GoF의 행위 패턴입니다. 방문자는 처리 연산을 객체 구조와 분리합니다. 반복자는 원소 탐색에 초점을 둡니다.",
    "source": 1,
    "page": 41,
    "topic": "pattern",
    "concept": "visitor",
    "exercise": "scenario",
    "patternGroup": "행위"
  },
  {
    "id": "q447",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "GoF 디자인 패턴 중 방문자(Visitor)는 생성·구조·행위 중 어느 분류에 속하는가? 분류명을 쓰시오.",
    "answer": "행위",
    "aliases": [
      "행위",
      "행위 패턴",
      "Behavioral"
    ],
    "explanation": "방문자는 행위 패턴입니다. 객체 구조를 크게 바꾸지 않고 외부 방문 객체에 새로운 연산을 추가한다.",
    "source": 1,
    "page": 41,
    "topic": "pattern",
    "concept": "visitor",
    "exercise": "classification",
    "patternGroup": "행위"
  },
  {
    "id": "q449",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "표현, 업무 처리, 데이터 접근을 별도 계층으로 나누고 각 계층이 담당 역할을 수행한다. 적용한 아키텍처 패턴의 명칭을 쓰시오.",
    "answer": "계층형",
    "aliases": [
      "계층형",
      "Layered",
      "계층형 아키텍처",
      "계층형 패턴",
      "Layered Pattern",
      "Layer",
      "Layered Architecture",
      "레이어",
      "계층화",
      "계층형 아키텍처"
    ],
    "explanation": "계층형은 전체 시스템의 책임 분할입니다. MVC는 데이터·표시·입력 제어의 역할 분리에 초점을 둡니다.",
    "source": 2,
    "page": 6,
    "topic": "architecture",
    "concept": "arch-layered",
    "exercise": "scenario",
    "patternGroup": ""
  },
  {
    "id": "q451",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "여러 사용자의 프로그램이 중앙 서버에 자료를 요청하고 서버가 처리 결과를 응답한다. 이 아키텍처 패턴을 쓰시오.",
    "answer": "클라이언트 서버",
    "aliases": [
      "클라이언트 서버",
      "Client Server",
      "클라이언트 서버 아키텍처",
      "클라이언트 서버 패턴",
      "Client Server Pattern",
      "Client-server",
      "클라이언트-서버"
    ],
    "explanation": "요청자와 서비스 제공자의 구분이 핵심입니다.",
    "source": 2,
    "page": 6,
    "topic": "architecture",
    "concept": "arch-client-server",
    "exercise": "scenario",
    "patternGroup": ""
  },
  {
    "id": "q453",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "로그를 읽어 불필요한 행 제거, 값 변환, 집계의 단계로 전달한다. 독립적인 각 단계는 출력 데이터를 다음 단계로 보낸다. 이 아키텍처를 쓰시오.",
    "answer": "파이프 필터",
    "aliases": [
      "파이프 필터",
      "Pipe Filter",
      "파이프 필터 아키텍처",
      "파이프 필터 패턴",
      "Pipe Filter Pattern",
      "Pipe-Filter",
      "파이프-필터",
      "Pipe and Filter"
    ],
    "explanation": "독립된 변환 단계와 단계 사이 데이터 전달이 핵심입니다.",
    "source": 2,
    "page": 6,
    "topic": "architecture",
    "concept": "arch-pipe-filter",
    "exercise": "scenario",
    "patternGroup": ""
  },
  {
    "id": "q455",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "사용자 입력 처리를 Controller에, 핵심 데이터 처리를 Model에, 화면 표시를 View에 둔다. 이 아키텍처의 약어를 쓰시오.",
    "answer": "MVC",
    "aliases": [
      "MVC",
      "MVC",
      "MVC 아키텍처",
      "MVC 패턴",
      "MVC Pattern"
    ],
    "explanation": "Model·View·Controller의 역할을 구분하세요. GoF 생성·구조·행위 분류에는 넣지 않습니다.",
    "source": 2,
    "page": 6,
    "topic": "architecture",
    "concept": "arch-mvc",
    "exercise": "scenario",
    "patternGroup": ""
  },
  {
    "id": "q457",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "하나의 조정 컴포넌트가 대량 계산을 나누어 여러 작업자에 맡긴 후 결과를 모은다. 이 아키텍처 패턴을 쓰시오.",
    "answer": "마스터 슬레이브",
    "aliases": [
      "마스터 슬레이브",
      "Master Slave",
      "마스터 슬레이브 아키텍처",
      "마스터 슬레이브 패턴",
      "Master Slave Pattern",
      "Master-slave",
      "마스터-슬레이브"
    ],
    "explanation": "마스터는 작업 분배와 결과 취합, 슬레이브는 할당된 작업 처리를 맡습니다.",
    "source": 2,
    "page": 6,
    "topic": "architecture",
    "concept": "arch-master-slave",
    "exercise": "scenario",
    "patternGroup": ""
  },
  {
    "id": "q459",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "클라이언트가 서비스의 실제 위치를 직접 알 필요 없이 중개 컴포넌트를 통해 원격 서비스를 호출한다. 이 아키텍처를 쓰시오.",
    "answer": "브로커",
    "aliases": [
      "브로커",
      "Broker",
      "브로커 아키텍처",
      "브로커 패턴",
      "Broker Pattern"
    ],
    "explanation": "브로커는 분산 서비스의 호출 중개입니다. GoF 중재자와 설계 범위를 구분하세요.",
    "source": 2,
    "page": 6,
    "topic": "architecture",
    "concept": "arch-broker",
    "exercise": "scenario",
    "patternGroup": ""
  },
  {
    "id": "q461",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "중앙 서버에만 의존하지 않고 참여 노드들이 파일 조각을 서로 요청하고 제공한다. 이 아키텍처의 명칭을 쓰시오.",
    "answer": "피어 투 피어",
    "aliases": [
      "피어 투 피어",
      "Peer to Peer",
      "피어 투 피어 아키텍처",
      "피어 투 피어 패턴",
      "Peer to Peer Pattern",
      "P2P",
      "Peer-to-peer",
      "피어투피어"
    ],
    "explanation": "노드가 클라이언트와 서버 역할을 함께 수행한다는 점이 핵심입니다.",
    "source": 2,
    "page": 6,
    "topic": "architecture",
    "concept": "arch-peer-to-peer",
    "exercise": "scenario",
    "patternGroup": ""
  },
  {
    "id": "q463",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "주문 서비스가 이벤트 채널에 주문 완료 메시지를 발행하면 해당 채널을 구독한 배송·통계 서비스가 이를 처리한다. 이 아키텍처를 쓰시오.",
    "answer": "이벤트 버스",
    "aliases": [
      "이벤트 버스",
      "Event Bus",
      "이벤트 버스 아키텍처",
      "이벤트 버스 패턴",
      "Event Bus Pattern",
      "Event-bus"
    ],
    "explanation": "이벤트 버스는 채널을 통한 시스템 간 이벤트 전달입니다. 옵서버는 관찰 대상과 관찰자의 일대다 관계입니다.",
    "source": 2,
    "page": 6,
    "topic": "architecture",
    "concept": "arch-event-bus",
    "exercise": "scenario",
    "patternGroup": ""
  },
  {
    "id": "q465",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "음성 인식의 여러 분석 컴포넌트가 공유 작업 공간에 중간 결과를 올리고 다른 컴포넌트의 결과를 이용한다. 이 아키텍처를 쓰시오.",
    "answer": "블랙보드",
    "aliases": [
      "블랙보드",
      "Blackboard",
      "블랙보드 아키텍처",
      "블랙보드 패턴",
      "Blackboard Pattern"
    ],
    "explanation": "공유 지식·작업 공간을 중심으로 여러 처리자가 협력한다는 단서가 핵심입니다.",
    "source": 2,
    "page": 6,
    "topic": "architecture",
    "concept": "arch-blackboard",
    "exercise": "scenario",
    "patternGroup": ""
  },
  {
    "id": "q467",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "실행할 명령 데이터와 그 명령을 읽어 동작시키는 해석 엔진을 중심으로 시스템을 구성한다. 이 아키텍처 패턴을 쓰시오.",
    "answer": "인터프리터",
    "aliases": [
      "인터프리터",
      "Interpreter Architecture",
      "인터프리터 아키텍처",
      "인터프리터 패턴",
      "Interpreter Architecture Pattern",
      "Interpreter",
      "해석기"
    ],
    "explanation": "아키텍처에서는 해석 엔진을 중심으로 한 시스템 구성, GoF에서는 문법 규칙의 객체화를 묻습니다.",
    "source": 2,
    "page": 6,
    "topic": "architecture",
    "concept": "arch-interpreter-architecture",
    "exercise": "scenario",
    "patternGroup": ""
  },
  {
    "id": "q468",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "기존 코드의 호출 규격을 새 규격과 맞추려 한다. 복잡한 하위 시스템을 단순하게 묶는 것이 아니라 인터페이스 호환이 목적이다. 적용할 GoF 패턴을 쓰시오.",
    "answer": "어댑터",
    "aliases": [
      "어댑터",
      "Adapter"
    ],
    "explanation": "어댑터는 규격 변환, 퍼사드는 사용 단순화입니다.",
    "source": 1,
    "page": 39,
    "topic": "pattern",
    "concept": "adapter",
    "exercise": "compare",
    "patternGroup": "",
    "examEvidence": {
      "source": 1,
      "page": 39,
      "dates": [
        "2025.4"
      ],
      "topic": "어댑터",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-pattern-adapter"
  },
  {
    "id": "q469",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "여러 하위 시스템을 조합한 작업을 하나의 단순한 진입점으로 제공한다. 기존 인터페이스의 불일치를 변환하는 것은 주목적이 아니다. 적용할 패턴을 쓰시오.",
    "answer": "퍼사드",
    "aliases": [
      "퍼사드",
      "파사드",
      "Facade"
    ],
    "explanation": "퍼사드는 단순한 상위 인터페이스를 제공합니다. 어댑터는 호환되지 않는 규격을 맞춥니다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "facade",
    "exercise": "compare",
    "patternGroup": ""
  },
  {
    "id": "q470",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "동일한 요청을 처리하는 방식이 객체 내부의 대기·실행·완료 상태에 따라 바뀐다. 사용자가 할인 알고리즘을 선택하는 상황과 구분되는 GoF 패턴을 쓰시오.",
    "answer": "상태",
    "aliases": [
      "상태",
      "State",
      "상태 패턴"
    ],
    "explanation": "상태는 현재 상태의 동작 분리, 전략은 교체 가능한 알고리즘의 분리입니다.",
    "source": 1,
    "page": 41,
    "topic": "pattern",
    "concept": "state",
    "exercise": "compare",
    "patternGroup": ""
  },
  {
    "id": "q471",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "클라이언트가 여러 경로 탐색 알고리즘 중 하나를 선택해서 바꾸어 사용한다. 객체의 현재 상태 전이가 아닌 알고리즘 교환을 위한 패턴을 쓰시오.",
    "answer": "전략",
    "aliases": [
      "전략",
      "Strategy",
      "전략 패턴"
    ],
    "explanation": "전략은 알고리즘 선택·교환을 가능하게 합니다.",
    "source": 1,
    "page": 41,
    "topic": "pattern",
    "concept": "strategy",
    "exercise": "compare",
    "patternGroup": ""
  },
  {
    "id": "q472",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "원본 객체와 같은 인터페이스를 유지하면서 로깅·암호화 기능을 감싸는 객체로 추가한다. 접근 권한 확인을 위한 대리 객체와 구분되는 패턴을 쓰시오.",
    "answer": "데코레이터",
    "aliases": [
      "데코레이터",
      "Decorator"
    ],
    "explanation": "데코레이터는 기능 추가, 프록시는 접근 대행 및 제어입니다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "decorator",
    "exercise": "compare",
    "patternGroup": ""
  },
  {
    "id": "q473",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "원본 객체와 같은 인터페이스를 제공하되 권한을 검사하고 허용된 경우에만 원본으로 요청을 전달한다. 기능 추가보다 접근 제어가 목적인 패턴을 쓰시오.",
    "answer": "프록시",
    "aliases": [
      "프록시",
      "Proxy"
    ],
    "explanation": "프록시는 원본 객체에 대한 접근을 대신합니다.",
    "source": 1,
    "page": 40,
    "topic": "pattern",
    "concept": "proxy",
    "exercise": "compare",
    "patternGroup": "",
    "examEvidence": {
      "source": 1,
      "page": 40,
      "dates": [
        "2025.7",
        "2023.4"
      ],
      "topic": "프록시",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-pattern-proxy"
  },
  {
    "id": "q474",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "MVC에서 사용자에게 정보를 표시하는 역할의 명칭을 쓰시오.",
    "answer": "View",
    "aliases": [
      "View",
      "뷰"
    ],
    "explanation": "View는 정보 표시, Model은 핵심 데이터와 처리, Controller는 입력 제어를 담당합니다.",
    "source": 2,
    "page": 6,
    "topic": "architecture",
    "concept": "arch-mvc",
    "exercise": "compare",
    "patternGroup": ""
  },
  {
    "id": "q475",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "MVC에서 사용자의 입력을 받아 적절한 처리로 연결하는 역할의 명칭을 쓰시오.",
    "answer": "Controller",
    "aliases": [
      "Controller",
      "컨트롤러"
    ],
    "explanation": "Controller는 입력을 처리하고 Model 및 View 사이의 동작을 조정합니다.",
    "source": 2,
    "page": 6,
    "topic": "architecture",
    "concept": "arch-mvc",
    "exercise": "compare",
    "patternGroup": ""
  },
  {
    "id": "q476",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "MVC에서 화면 표시와 분리하여 핵심 데이터와 업무 처리를 맡는 역할의 명칭을 쓰시오.",
    "answer": "Model",
    "aliases": [
      "Model",
      "모델"
    ],
    "explanation": "Model은 핵심 데이터 및 업무 처리를 담당합니다.",
    "source": 2,
    "page": 6,
    "topic": "architecture",
    "concept": "arch-mvc",
    "exercise": "compare",
    "patternGroup": ""
  },
  {
    "id": "q477",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "R(학번, 학과코드, 학과명)의 기본키는 학번이다. 학번 → 학과코드, 학과코드 → 학과명이 성립한다. 학과명이 학번에 대해 갖는 함수 종속의 종류를 쓰시오.",
    "answer": "이행 함수 종속",
    "aliases": [
      "이행 함수 종속",
      "이행적 함수 종속",
      "Transitive Dependency"
    ],
    "explanation": "학번 → 학과코드 → 학과명으로 다른 속성을 거쳐 종속됩니다.",
    "source": 1,
    "page": 22,
    "examEvidence": {
      "source": 1,
      "page": 22,
      "dates": [
        "2024.4",
        "2021.7"
      ],
      "topic": "정규화·함수 종속",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-normalization"
  },
  {
    "id": "q478",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "수강(학번, 과목코드, 학생이름, 성적)의 기본키는 (학번, 과목코드)이다. 학생이름은 학번에만 종속된다. 제2정규형으로 만들 때 제거해야 할 함수 종속의 종류를 쓰시오.",
    "answer": "부분 함수 종속",
    "aliases": [
      "부분 함수 종속",
      "부분적 함수 종속",
      "Partial Dependency"
    ],
    "explanation": "복합키 일부인 학번만으로 학생이름이 결정되므로 부분 함수 종속입니다.",
    "source": 1,
    "page": 22,
    "examEvidence": {
      "source": 1,
      "page": 22,
      "dates": [
        "2024.4",
        "2021.7"
      ],
      "topic": "정규화·함수 종속",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-normalization"
  },
  {
    "id": "q479",
    "category": "데이터베이스",
    "type": "short",
    "prompt": "계좌 이체에서 출금은 성공했지만 입금에 실패하여 출금도 취소했다. 이 처리가 보장하려는 트랜잭션 특성의 명칭을 쓰시오.",
    "answer": "원자성",
    "aliases": [
      "원자성",
      "Atomicity"
    ],
    "explanation": "이체의 모든 연산을 전부 성공시키거나 전부 취소하는 원자성입니다.",
    "source": 1,
    "page": 26,
    "examEvidence": {
      "source": 1,
      "page": 26,
      "dates": [
        "2021.7",
        "2020.5"
      ],
      "topic": "트랜잭션 특성",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-transaction"
  },
  {
    "id": "q480",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "모듈 A가 정렬 방식을 나타내는 flag 값을 B에 전달하고, B는 flag에 따라 다른 내부 처리 경로를 선택한다. 두 모듈 사이 결합도의 종류를 쓰시오.",
    "answer": "제어 결합도",
    "aliases": [
      "제어 결합도",
      "Control Coupling"
    ],
    "explanation": "단순 데이터가 아니라 처리 흐름을 선택하는 제어 요소를 전달합니다.",
    "source": 1,
    "page": 36,
    "examEvidence": {
      "source": 1,
      "page": 36,
      "dates": [
        "2025.4",
        "2024.7",
        "2021.10",
        "2021.4"
      ],
      "topic": "결합도",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-coupling"
  },
  {
    "id": "q481",
    "category": "소프트웨어",
    "type": "short",
    "prompt": "모듈의 1단계에서 만든 정제 데이터가 2단계 변환의 입력이 되고, 변환 결과가 3단계 저장의 입력이 된다. 이 모듈의 응집도 종류를 쓰시오.",
    "answer": "순차적 응집도",
    "aliases": [
      "순차적 응집도",
      "Sequential Cohesion"
    ],
    "explanation": "한 활동의 출력이 다음 활동의 입력으로 이어지는 것이 단서입니다.",
    "source": 1,
    "page": 36,
    "examEvidence": {
      "source": 1,
      "page": 36,
      "dates": [
        "2024.7",
        "2021.7"
      ],
      "topic": "응집도",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-cohesion"
  },
  {
    "id": "q482",
    "category": "데이터베이스",
    "type": "blank",
    "prompt": "Employee(dept, salary)에서 부서별 평균 급여가 3000 이상인 부서만 조회한다. 빈칸의 절을 쓰시오.\n\nSELECT dept, AVG(salary)\nFROM Employee\nGROUP BY dept\n(     ) AVG(salary) >= 3000;",
    "answer": "HAVING",
    "aliases": [
      "HAVING"
    ],
    "explanation": "그룹화 이후 집계 결과에 조건을 적용하므로 HAVING입니다.",
    "source": 1,
    "page": 61,
    "examEvidence": {
      "source": 1,
      "page": 61,
      "dates": [
        "2024.7",
        "2023.4",
        "2020.11",
        "2020.10"
      ],
      "topic": "GROUP BY·HAVING",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-group"
  },
  {
    "id": "q483",
    "category": "데이터베이스",
    "type": "output",
    "prompt": "A(x)는 [1, 1, 2], B(x)는 [2, 3]의 행을 가진다. 다음 쿼리의 결과 행 수를 순서대로 쓰시오.\n① SELECT x FROM A UNION SELECT x FROM B;\n② SELECT x FROM A UNION ALL SELECT x FROM B;",
    "answer": "3, 5",
    "aliases": [
      "3, 5"
    ],
    "explanation": "UNION은 중복 제거 후 1, 2, 3의 3행, UNION ALL은 원래 행 3+2의 5행입니다.",
    "source": 1,
    "page": 61,
    "examEvidence": {
      "source": 1,
      "page": 61,
      "dates": [
        "2023.10"
      ],
      "topic": "SQL 집합 연산",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-set"
  },
  {
    "id": "q484",
    "category": "데이터베이스",
    "type": "output",
    "prompt": "R(id, dept)는 (1,A), (2,B), (3,A), (4,C)이고 S(dept, enabled)는 (A,1), (B,0), (C,1)이다. 다음 SQL 결과의 id를 오름차순으로 쓰시오.\n\nSELECT id FROM R\nWHERE dept IN (SELECT dept FROM S WHERE enabled = 1)\nORDER BY id;",
    "answer": "1, 3, 4",
    "aliases": [
      "1, 3, 4"
    ],
    "explanation": "하위 질의의 부서는 A, C이므로 해당하는 id는 1, 3, 4입니다.",
    "source": 1,
    "page": 60,
    "examEvidence": {
      "source": 1,
      "page": 60,
      "dates": [
        "2024.10",
        "2024.4",
        "2022.7"
      ],
      "topic": "SQL 하위 질의",
      "kind": "교재 실기 출제 표기"
    },
    "coreConcept": "exam-sql-subquery"
  },
  {
    "id": "q485",
    "category": "보안",
    "type": "short",
    "prompt": "다음 설명에 해당하는 악성코드 또는 공격 기법의 명칭을 쓰시오.\n\n다른 실행 파일이나 부트 영역 등에 자신의 코드를 붙여 감염시키고 숙주가 실행될 때 함께 동작한다.",
    "answer": "바이러스",
    "aliases": [
      "바이러스",
      "Virus",
      "바이러스 공격",
      "Virus Attack"
    ],
    "explanation": "바이러스는 숙주 감염, 웜은 독립적인 자기 전파가 핵심입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-virus",
    "exercise": "description",
    "patternGroup": "악성코드"
  },
  {
    "id": "q486",
    "category": "보안",
    "type": "short",
    "prompt": "프로그램 파일에 악성 코드가 삽입되었다. 그 파일이 실행되면 악성 코드도 동작하고 다른 파일을 감염시킨다. 이 악성코드의 명칭을 쓰시오.",
    "answer": "바이러스",
    "aliases": [
      "바이러스",
      "Virus",
      "바이러스 공격",
      "Virus Attack"
    ],
    "explanation": "바이러스는 숙주 감염, 웜은 독립적인 자기 전파가 핵심입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-virus",
    "exercise": "scenario",
    "patternGroup": "악성코드"
  },
  {
    "id": "q487",
    "category": "보안",
    "type": "short",
    "prompt": "취약한 장치를 통해 악성 프로그램이 스스로 다음 장치로 전파된다. 다른 실행 파일에 기생하지 않는 이 악성코드의 명칭을 쓰시오.",
    "answer": "웜",
    "aliases": [
      "웜",
      "Worm",
      "웜 공격",
      "Worm Attack"
    ],
    "explanation": "웜은 자기 전파, 트로이 목마는 정상 프로그램 위장이 핵심입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-worm",
    "exercise": "scenario",
    "patternGroup": "악성코드"
  },
  {
    "id": "q488",
    "category": "보안",
    "type": "short",
    "prompt": "무료 문서 변환기로 소개된 프로그램을 설치했더니 숨겨진 악성 기능이 실행되었다. 정상 프로그램으로 위장한 이 악성코드의 명칭을 쓰시오.",
    "answer": "트로이 목마",
    "aliases": [
      "트로이 목마",
      "Trojan Horse",
      "트로이 목마 공격",
      "Trojan Horse Attack",
      "트로이목마",
      "Trojan"
    ],
    "explanation": "트로이 목마는 위장 실행입니다. 파일 감염·자기 전파와 구분하세요.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-trojan",
    "exercise": "scenario",
    "patternGroup": "악성코드"
  },
  {
    "id": "q489",
    "category": "보안",
    "type": "short",
    "prompt": "회사 문서를 열 수 없게 되었고 화면에 복구 비용을 지급하라는 메시지가 나타났다. 해당 악성코드의 명칭을 쓰시오.",
    "answer": "랜섬웨어",
    "aliases": [
      "랜섬웨어",
      "Ransomware",
      "랜섬웨어 공격",
      "Ransomware Attack"
    ],
    "explanation": "암호화·이용 방해 후 금전 요구가 핵심입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-ransomware",
    "exercise": "scenario",
    "patternGroup": "악성코드"
  },
  {
    "id": "q490",
    "category": "보안",
    "type": "short",
    "prompt": "다음 설명에 해당하는 악성코드 또는 공격 기법의 명칭을 쓰시오.\n\n정상적인 인증이나 접근 통제를 우회하여 시스템에 접근하도록 남겨 둔 숨은 통로이다.",
    "answer": "백도어",
    "aliases": [
      "백도어",
      "Backdoor",
      "백도어 공격",
      "Backdoor Attack",
      "Back Door"
    ],
    "explanation": "백도어는 우회 접근 통로입니다. 루트킷은 침해 흔적이나 악성 동작을 숨기는 도구 모음에 초점을 둡니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-backdoor",
    "exercise": "description",
    "patternGroup": "악성코드"
  },
  {
    "id": "q491",
    "category": "보안",
    "type": "short",
    "prompt": "공격자가 다시 들어올 수 있도록 정상 로그인 절차를 거치지 않는 비밀 접근 통로를 남겼다. 이 통로의 명칭을 쓰시오.",
    "answer": "백도어",
    "aliases": [
      "백도어",
      "Backdoor",
      "백도어 공격",
      "Backdoor Attack",
      "Back Door"
    ],
    "explanation": "백도어는 우회 접근 통로입니다. 루트킷은 침해 흔적이나 악성 동작을 숨기는 도구 모음에 초점을 둡니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-backdoor",
    "exercise": "scenario",
    "patternGroup": "악성코드"
  },
  {
    "id": "q492",
    "category": "보안",
    "type": "short",
    "prompt": "다음 설명에 해당하는 악성코드 또는 공격 기법의 명칭을 쓰시오.\n\n침해된 시스템에서 권한 유지와 악성 활동의 은폐 등을 위해 사용하는 도구들의 모음이다.",
    "answer": "루트킷",
    "aliases": [
      "루트킷",
      "Rootkit",
      "루트킷 공격",
      "Rootkit Attack",
      "루트 키트"
    ],
    "explanation": "루트킷은 도구 모음과 은폐, 백도어는 우회 접근 통로입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-rootkit",
    "exercise": "description",
    "patternGroup": "악성코드"
  },
  {
    "id": "q493",
    "category": "보안",
    "type": "short",
    "prompt": "침해 조사 중 악성 프로세스와 파일의 존재를 감추고 공격자의 권한 유지를 돕는 도구 모음이 발견되었다. 명칭을 쓰시오.",
    "answer": "루트킷",
    "aliases": [
      "루트킷",
      "Rootkit",
      "루트킷 공격",
      "Rootkit Attack",
      "루트 키트"
    ],
    "explanation": "루트킷은 도구 모음과 은폐, 백도어는 우회 접근 통로입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-rootkit",
    "exercise": "scenario",
    "patternGroup": "악성코드"
  },
  {
    "id": "q494",
    "category": "보안",
    "type": "short",
    "prompt": "게시판 글에 삽입된 악성 스크립트가 그 글을 읽은 방문자의 브라우저에서 실행되었다. 공격 기법의 약어를 쓰시오.",
    "answer": "XSS",
    "aliases": [
      "XSS",
      "Cross-Site Scripting",
      "XSS 공격",
      "Cross-Site Scripting Attack",
      "크로스 사이트 스크립팅",
      "Cross Site Scripting"
    ],
    "explanation": "XSS는 브라우저에서 스크립트 실행, CSRF는 인증된 사용자의 의도하지 않은 요청입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-xss",
    "exercise": "scenario",
    "patternGroup": "웹 공격"
  },
  {
    "id": "q495",
    "category": "보안",
    "type": "short",
    "prompt": "로그인 상태인 사용자가 외부 페이지를 방문하자 본인 의도와 달리 계정 정보 변경 요청이 원래 사이트로 전송되었다. 공격의 약어를 쓰시오.",
    "answer": "CSRF",
    "aliases": [
      "CSRF",
      "Cross-Site Request Forgery",
      "CSRF 공격",
      "Cross-Site Request Forgery Attack",
      "크로스 사이트 요청 위조",
      "Cross Site Request Forgery"
    ],
    "explanation": "이미 인증된 사용자의 권한을 이용한 요청 위조가 핵심입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-csrf",
    "exercise": "scenario",
    "patternGroup": "웹 공격"
  },
  {
    "id": "q496",
    "category": "보안",
    "type": "short",
    "prompt": "서버가 사용자 입력을 SQL 문자열에 직접 붙이고 있다. 조작된 입력으로 원래 질의의 조건이 바뀌어 비인가 데이터가 조회되었다. 공격 기법의 명칭을 쓰시오.",
    "answer": "SQL 삽입",
    "aliases": [
      "SQL 삽입",
      "SQL Injection",
      "SQL 삽입 공격",
      "SQL Injection Attack",
      "SQL 인젝션",
      "SQL 주입"
    ],
    "explanation": "SQL 삽입은 서버의 데이터베이스 질의 조작입니다. XSS는 방문자 브라우저의 스크립트 실행입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-sql-injection",
    "exercise": "scenario",
    "patternGroup": "웹 공격"
  },
  {
    "id": "q497",
    "category": "보안",
    "type": "short",
    "prompt": "다음 설명에 해당하는 악성코드 또는 공격 기법의 명칭을 쓰시오.\n\n과도한 요청이나 취약점 악용 등으로 시스템이 정상적인 서비스를 제공하지 못하게 하는 공격이다.",
    "answer": "DoS",
    "aliases": [
      "DoS",
      "Denial of Service",
      "DoS 공격",
      "Denial of Service Attack",
      "서비스 거부 공격"
    ],
    "explanation": "DoS는 서비스 거부 공격의 통칭입니다. 여러 공격원에서 분산 수행하면 DDoS라고 합니다.",
    "source": 2,
    "page": 18,
    "topic": "security",
    "concept": "security-dos",
    "exercise": "description",
    "patternGroup": "네트워크 공격"
  },
  {
    "id": "q498",
    "category": "보안",
    "type": "short",
    "prompt": "하나의 공격원에서 요청을 집중시켜 서버 자원을 고갈시키고 정상 사용자의 접속을 방해했다. 서비스 거부 공격의 약어를 쓰시오.",
    "answer": "DoS",
    "aliases": [
      "DoS",
      "Denial of Service",
      "DoS 공격",
      "Denial of Service Attack",
      "서비스 거부 공격"
    ],
    "explanation": "DoS는 서비스 거부 공격의 통칭입니다. 여러 공격원에서 분산 수행하면 DDoS라고 합니다.",
    "source": 2,
    "page": 18,
    "topic": "security",
    "concept": "security-dos",
    "exercise": "scenario",
    "patternGroup": "네트워크 공격"
  },
  {
    "id": "q499",
    "category": "보안",
    "type": "short",
    "prompt": "여러 지역의 감염된 장치들이 동시에 한 서버에 요청을 보내 정상 서비스를 마비시켰다. 공격의 약어를 쓰시오.",
    "answer": "DDoS",
    "aliases": [
      "DDoS",
      "Distributed Denial of Service",
      "DDoS 공격",
      "Distributed Denial of Service Attack",
      "분산 서비스 거부 공격"
    ],
    "explanation": "여러 공격원의 분산 수행이 DDoS의 구별 단서입니다.",
    "source": 2,
    "page": 18,
    "topic": "security",
    "concept": "security-ddos",
    "exercise": "scenario",
    "patternGroup": "네트워크 공격"
  },
  {
    "id": "q500",
    "category": "보안",
    "type": "short",
    "prompt": "다음 설명에 해당하는 악성코드 또는 공격 기법의 명칭을 쓰시오.\n\n피해자 주소로 위장한 ICMP 요청을 브로드캐스트하여 다수의 응답이 피해자에게 집중되게 한다.",
    "answer": "스머프",
    "aliases": [
      "스머프",
      "Smurf",
      "스머프 공격",
      "Smurf Attack",
      "스머핑",
      "Smurfing"
    ],
    "explanation": "ICMP·브로드캐스트·응답 집중이 스머프의 핵심 단서입니다.",
    "source": 2,
    "page": 18,
    "topic": "security",
    "concept": "security-smurf",
    "exercise": "description",
    "patternGroup": "네트워크 공격"
  },
  {
    "id": "q501",
    "category": "보안",
    "type": "short",
    "prompt": "출발지 주소가 피해자로 위장된 ICMP 요청이 브로드캐스트되었고, 여러 장치의 응답이 피해자에게 몰렸다. 이 공격 기법을 쓰시오.",
    "answer": "스머프",
    "aliases": [
      "스머프",
      "Smurf",
      "스머프 공격",
      "Smurf Attack",
      "스머핑",
      "Smurfing"
    ],
    "explanation": "ICMP·브로드캐스트·응답 집중이 스머프의 핵심 단서입니다.",
    "source": 2,
    "page": 18,
    "topic": "security",
    "concept": "security-smurf",
    "exercise": "scenario",
    "patternGroup": "네트워크 공격"
  },
  {
    "id": "q502",
    "category": "보안",
    "type": "short",
    "prompt": "다음 설명에 해당하는 악성코드 또는 공격 기법의 명칭을 쓰시오.\n\n패킷의 출발지와 목적지 주소를 모두 공격 대상의 주소로 설정하는 공격이다.",
    "answer": "랜드",
    "aliases": [
      "랜드",
      "LAND",
      "랜드 공격",
      "LAND Attack"
    ],
    "explanation": "출발지와 목적지가 모두 피해자 주소라는 단서를 확인하세요.",
    "source": 2,
    "page": 18,
    "topic": "security",
    "concept": "security-land",
    "exercise": "description",
    "patternGroup": "네트워크 공격"
  },
  {
    "id": "q503",
    "category": "보안",
    "type": "short",
    "prompt": "비정상 패킷을 분석하니 출발지와 목적지 IP가 모두 피해 시스템의 IP로 설정되어 있었다. 공격 기법의 명칭을 쓰시오.",
    "answer": "랜드",
    "aliases": [
      "랜드",
      "LAND",
      "랜드 공격",
      "LAND Attack"
    ],
    "explanation": "출발지와 목적지가 모두 피해자 주소라는 단서를 확인하세요.",
    "source": 2,
    "page": 18,
    "topic": "security",
    "concept": "security-land",
    "exercise": "scenario",
    "patternGroup": "네트워크 공격"
  },
  {
    "id": "q504",
    "category": "보안",
    "type": "short",
    "prompt": "다음 설명에 해당하는 악성코드 또는 공격 기법의 명칭을 쓰시오.\n\n조각난 IP 패킷의 오프셋 등 단편 정보를 비정상적으로 조작하여 재조립 처리를 방해한다.",
    "answer": "티어드롭",
    "aliases": [
      "티어드롭",
      "Teardrop",
      "티어드롭 공격",
      "Teardrop Attack",
      "Tear Drop",
      "TearDrop",
      "티어 드롭"
    ],
    "explanation": "단편화 정보와 재조립 오류가 핵심입니다.",
    "source": 2,
    "page": 18,
    "topic": "security",
    "concept": "security-teardrop",
    "exercise": "description",
    "patternGroup": "네트워크 공격"
  },
  {
    "id": "q505",
    "category": "보안",
    "type": "short",
    "prompt": "비정상적으로 겹치는 단편 정보가 전달되어 IP 패킷의 재조립 과정에서 문제가 발생했다. 이 공격 기법의 명칭을 쓰시오.",
    "answer": "티어드롭",
    "aliases": [
      "티어드롭",
      "Teardrop",
      "티어드롭 공격",
      "Teardrop Attack",
      "Tear Drop",
      "TearDrop",
      "티어 드롭"
    ],
    "explanation": "단편화 정보와 재조립 오류가 핵심입니다.",
    "source": 2,
    "page": 18,
    "topic": "security",
    "concept": "security-teardrop",
    "exercise": "scenario",
    "patternGroup": "네트워크 공격"
  },
  {
    "id": "q506",
    "category": "보안",
    "type": "short",
    "prompt": "다음 설명에 해당하는 악성코드 또는 공격 기법의 명칭을 쓰시오.\n\nTCP 연결 설정을 끝내지 않는 요청을 대량으로 보내 반쯤 열린 연결 자원을 소모시킨다.",
    "answer": "SYN 플러딩",
    "aliases": [
      "SYN 플러딩",
      "SYN Flooding",
      "SYN 플러딩 공격",
      "SYN Flooding Attack",
      "SYN Flood"
    ],
    "explanation": "연결 설정 미완료 상태로 대기 자원을 소모하는 SYN 플러딩입니다.",
    "source": 2,
    "page": 18,
    "topic": "security",
    "concept": "security-syn-flooding",
    "exercise": "description",
    "patternGroup": "네트워크 공격"
  },
  {
    "id": "q507",
    "category": "보안",
    "type": "short",
    "prompt": "TCP 연결 요청이 대량으로 도착하지만 마지막 확인 응답이 오지 않아 미완료 연결이 쌓인다. 이 공격 기법을 쓰시오.",
    "answer": "SYN 플러딩",
    "aliases": [
      "SYN 플러딩",
      "SYN Flooding",
      "SYN 플러딩 공격",
      "SYN Flooding Attack",
      "SYN Flood"
    ],
    "explanation": "연결 설정 미완료 상태로 대기 자원을 소모하는 SYN 플러딩입니다.",
    "source": 2,
    "page": 18,
    "topic": "security",
    "concept": "security-syn-flooding",
    "exercise": "scenario",
    "patternGroup": "네트워크 공격"
  },
  {
    "id": "q508",
    "category": "보안",
    "type": "short",
    "prompt": "통신 상대방의 신원을 위장한 것이 아니라, 전송 중인 패킷을 엿보아 계정 정보를 수집했다. 이 행위의 명칭을 쓰시오.",
    "answer": "스니핑",
    "aliases": [
      "스니핑",
      "Sniffing",
      "스니핑 공격",
      "Sniffing Attack"
    ],
    "explanation": "스니핑은 엿보기, 스푸핑은 신원·주소 위장입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-sniffing",
    "exercise": "scenario",
    "patternGroup": "네트워크 공격"
  },
  {
    "id": "q509",
    "category": "보안",
    "type": "short",
    "prompt": "수신자가 신뢰하는 시스템에서 온 것처럼 보이도록 발신 주소를 위장했다. 이러한 공격의 일반적인 명칭을 쓰시오.",
    "answer": "스푸핑",
    "aliases": [
      "스푸핑",
      "Spoofing",
      "스푸핑 공격",
      "Spoofing Attack"
    ],
    "explanation": "위장이 핵심입니다. 패킷을 수동적으로 엿보는 스니핑과 구분하세요.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-spoofing",
    "exercise": "scenario",
    "patternGroup": "네트워크 공격"
  },
  {
    "id": "q510",
    "category": "보안",
    "type": "short",
    "prompt": "다음 설명에 해당하는 악성코드 또는 공격 기법의 명칭을 쓰시오.\n\n정상 사용자의 세션 식별 정보 등을 가로채 그 사용자로 가장하여 연결을 이용한다.",
    "answer": "세션 하이재킹",
    "aliases": [
      "세션 하이재킹",
      "Session Hijacking",
      "세션 하이재킹 공격",
      "Session Hijacking Attack",
      "세션 하이잭킹"
    ],
    "explanation": "인증된 세션의 탈취·가로채기가 핵심입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-session-hijacking",
    "exercise": "description",
    "patternGroup": "네트워크 공격"
  },
  {
    "id": "q511",
    "category": "보안",
    "type": "short",
    "prompt": "공격자가 정상 사용자의 세션 정보를 탈취한 뒤 이미 인증된 사용자처럼 서비스를 이용했다. 공격 명칭을 쓰시오.",
    "answer": "세션 하이재킹",
    "aliases": [
      "세션 하이재킹",
      "Session Hijacking",
      "세션 하이재킹 공격",
      "Session Hijacking Attack",
      "세션 하이잭킹"
    ],
    "explanation": "인증된 세션의 탈취·가로채기가 핵심입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-session-hijacking",
    "exercise": "scenario",
    "patternGroup": "네트워크 공격"
  },
  {
    "id": "q512",
    "category": "보안",
    "type": "short",
    "prompt": "금융기관에서 보낸 것처럼 꾸민 이메일이 위조 로그인 페이지로 접속을 유도하며 계정 정보를 요구했다. 이 기법의 명칭을 쓰시오.",
    "answer": "피싱",
    "aliases": [
      "피싱",
      "Phishing",
      "피싱 공격",
      "Phishing Attack"
    ],
    "explanation": "발신자·기관 사칭과 정보 제공 유도가 핵심입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-phishing",
    "exercise": "scenario",
    "patternGroup": "정보 탈취"
  },
  {
    "id": "q513",
    "category": "보안",
    "type": "short",
    "prompt": "택배 배송 안내로 위장한 문자 메시지가 악성 링크 방문을 유도했다. 문자 메시지를 이용한 이 피싱 기법의 명칭을 쓰시오.",
    "answer": "스미싱",
    "aliases": [
      "스미싱",
      "Smishing",
      "스미싱 공격",
      "Smishing Attack"
    ],
    "explanation": "문자 메시지(SMS)가 스미싱의 구별 단서입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-smishing",
    "exercise": "scenario",
    "patternGroup": "정보 탈취"
  },
  {
    "id": "q514",
    "category": "보안",
    "type": "short",
    "prompt": "다음 설명에 해당하는 악성코드 또는 공격 기법의 명칭을 쓰시오.\n\n이름 해석이나 호스트 설정 등을 조작하여 정상 주소로 접속하려는 사용자를 위조 사이트로 보낸다.",
    "answer": "파밍",
    "aliases": [
      "파밍",
      "Pharming",
      "파밍 공격",
      "Pharming Attack"
    ],
    "explanation": "파밍은 주소 해석·접속 경로 조작, 피싱은 사칭 메시지 등으로 정보를 유도하는 것이 핵심입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-pharming",
    "exercise": "description",
    "patternGroup": "정보 탈취"
  },
  {
    "id": "q515",
    "category": "보안",
    "type": "short",
    "prompt": "사용자는 올바른 은행 주소를 입력했지만 조작된 이름 해석 때문에 위조 사이트에 연결되었다. 이 기법의 명칭을 쓰시오.",
    "answer": "파밍",
    "aliases": [
      "파밍",
      "Pharming",
      "파밍 공격",
      "Pharming Attack"
    ],
    "explanation": "파밍은 주소 해석·접속 경로 조작, 피싱은 사칭 메시지 등으로 정보를 유도하는 것이 핵심입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-pharming",
    "exercise": "scenario",
    "patternGroup": "정보 탈취"
  },
  {
    "id": "q516",
    "category": "보안",
    "type": "short",
    "prompt": "다음 설명에 해당하는 악성코드 또는 공격 기법의 명칭을 쓰시오.\n\n특정 개인이나 조직을 표적으로 삼아 맞춤형 사칭 메시지로 정보를 탈취한다.",
    "answer": "스피어 피싱",
    "aliases": [
      "스피어 피싱",
      "Spear Phishing",
      "스피어 피싱 공격",
      "Spear Phishing Attack",
      "스피어피싱"
    ],
    "explanation": "불특정 다수보다 특정 표적에 맞춘 공격이라는 점이 핵심입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-spear-phishing",
    "exercise": "description",
    "patternGroup": "정보 탈취"
  },
  {
    "id": "q517",
    "category": "보안",
    "type": "short",
    "prompt": "특정 회사의 담당 업무와 동료 이름을 조사한 뒤 해당 직원 한 명에게 맞춤형 사칭 이메일을 보냈다. 이 피싱 유형을 쓰시오.",
    "answer": "스피어 피싱",
    "aliases": [
      "스피어 피싱",
      "Spear Phishing",
      "스피어 피싱 공격",
      "Spear Phishing Attack",
      "스피어피싱"
    ],
    "explanation": "불특정 다수보다 특정 표적에 맞춘 공격이라는 점이 핵심입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-spear-phishing",
    "exercise": "scenario",
    "patternGroup": "정보 탈취"
  },
  {
    "id": "q518",
    "category": "보안",
    "type": "short",
    "prompt": "한 서비스에서 유출된 아이디와 비밀번호 조합들을 다른 서비스의 로그인에 그대로 대입했다. 이 공격 기법의 명칭을 쓰시오.",
    "answer": "크리덴셜 스터핑",
    "aliases": [
      "크리덴셜 스터핑",
      "Credential Stuffing",
      "크리덴셜 스터핑 공격",
      "Credential Stuffing Attack",
      "크리덴셜스터핑"
    ],
    "explanation": "유출된 자격 증명의 재사용입니다. 가능한 모든 조합을 만드는 무차별 대입과 구분하세요.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-credential-stuffing",
    "exercise": "scenario",
    "patternGroup": "정보 탈취"
  },
  {
    "id": "q519",
    "category": "보안",
    "type": "short",
    "prompt": "특정 조직 직원들이 자주 이용하는 업계 사이트를 먼저 감염시킨 후 그 직원들이 방문하기를 기다렸다. 이 공격의 명칭을 쓰시오.",
    "answer": "워터링 홀",
    "aliases": [
      "워터링 홀",
      "Watering Hole",
      "워터링 홀 공격",
      "Watering Hole Attack",
      "워터링홀"
    ],
    "explanation": "대상이 자주 가는 사이트를 먼저 침해한다는 것이 단서입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-watering-hole",
    "exercise": "scenario",
    "patternGroup": "정보 탈취"
  },
  {
    "id": "q520",
    "category": "보안",
    "type": "short",
    "prompt": "다른 파일에 기생하여 그 파일의 실행과 함께 동작한다. 독립적인 프로그램으로 네트워크에서 스스로 전파하는 웜과 구별되는 악성코드의 명칭을 쓰시오.",
    "answer": "바이러스",
    "aliases": [
      "바이러스",
      "Virus",
      "바이러스 공격",
      "Virus Attack"
    ],
    "explanation": "바이러스는 숙주 감염, 웜은 독립적인 자기 전파가 핵심입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-virus",
    "exercise": "compare",
    "patternGroup": "악성코드"
  },
  {
    "id": "q521",
    "category": "보안",
    "type": "short",
    "prompt": "정상 실행 파일에 코드를 붙이는 방식이 아니라 독립적으로 복제·전파한다. 바이러스와 구별되는 이 악성코드의 명칭을 쓰시오.",
    "answer": "웜",
    "aliases": [
      "웜",
      "Worm",
      "웜 공격",
      "Worm Attack"
    ],
    "explanation": "웜은 자기 전파, 트로이 목마는 정상 프로그램 위장이 핵심입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-worm",
    "exercise": "compare",
    "patternGroup": "악성코드"
  },
  {
    "id": "q522",
    "category": "보안",
    "type": "short",
    "prompt": "두 공격을 구별하려 한다. 인증 상태로 다른 사이트에 요청을 보내게 하는 기법이 아니라, 삽입한 스크립트가 방문자 브라우저에서 실행되는 기법의 약어를 쓰시오.",
    "answer": "XSS",
    "aliases": [
      "XSS",
      "Cross Site Scripting",
      "크로스 사이트 스크립팅",
      "Cross-Site Scripting",
      "XSS 공격",
      "Cross-Site Scripting Attack"
    ],
    "explanation": "XSS는 브라우저에서 스크립트 실행, CSRF는 인증된 사용자의 의도하지 않은 요청입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-xss",
    "exercise": "compare",
    "patternGroup": "웹 공격"
  },
  {
    "id": "q523",
    "category": "보안",
    "type": "short",
    "prompt": "방문자의 브라우저에서 주입한 스크립트를 실행하는 것이 핵심이 아니라, 이미 로그인한 사용자의 권한으로 의도하지 않은 요청을 보내게 하는 공격의 약어를 쓰시오.",
    "answer": "CSRF",
    "aliases": [
      "CSRF",
      "Cross Site Request Forgery",
      "크로스 사이트 요청 위조",
      "Cross-Site Request Forgery",
      "CSRF 공격",
      "Cross-Site Request Forgery Attack"
    ],
    "explanation": "이미 인증된 사용자의 권한을 이용한 요청 위조가 핵심입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-csrf",
    "exercise": "compare",
    "patternGroup": "웹 공격"
  },
  {
    "id": "q524",
    "category": "보안",
    "type": "short",
    "prompt": "주소나 신원을 바꾸지 않고 전송되는 패킷을 엿보는 행위를 스푸핑과 구분하여 무엇이라고 하는가?",
    "answer": "스니핑",
    "aliases": [
      "스니핑",
      "Sniffing",
      "스니핑 공격",
      "Sniffing Attack"
    ],
    "explanation": "스니핑은 엿보기, 스푸핑은 신원·주소 위장입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-sniffing",
    "exercise": "compare",
    "patternGroup": "네트워크 공격"
  },
  {
    "id": "q525",
    "category": "보안",
    "type": "short",
    "prompt": "패킷을 엿보는 행위가 아니라 다른 시스템의 주소·신원인 것처럼 가장하는 행위를 무엇이라고 하는가?",
    "answer": "스푸핑",
    "aliases": [
      "스푸핑",
      "Spoofing",
      "스푸핑 공격",
      "Spoofing Attack"
    ],
    "explanation": "위장이 핵심입니다. 패킷을 수동적으로 엿보는 스니핑과 구분하세요.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-spoofing",
    "exercise": "compare",
    "patternGroup": "네트워크 공격"
  },
  {
    "id": "q526",
    "category": "보안",
    "type": "short",
    "prompt": "정보 탈취 시도에서 조작된 DNS가 아니라 SMS에 포함된 사칭 안내와 링크를 이용했다. 이 기법을 파밍과 구분하여 쓰시오.",
    "answer": "스미싱",
    "aliases": [
      "스미싱",
      "Smishing",
      "스미싱 공격",
      "Smishing Attack"
    ],
    "explanation": "문자 메시지(SMS)가 스미싱의 구별 단서입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-smishing",
    "exercise": "compare",
    "patternGroup": "정보 탈취"
  },
  {
    "id": "q527",
    "category": "보안",
    "type": "short",
    "prompt": "사용자는 주소를 올바르게 입력했으나 조작된 이름 해석으로 위조 사이트에 연결되었다. 문자 메시지를 이용한 스미싱과 구분되는 기법을 쓰시오.",
    "answer": "파밍",
    "aliases": [
      "파밍",
      "Pharming",
      "파밍 공격",
      "Pharming Attack"
    ],
    "explanation": "파밍은 주소 해석·접속 경로 조작, 피싱은 사칭 메시지 등으로 정보를 유도하는 것이 핵심입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-pharming",
    "exercise": "compare",
    "patternGroup": "정보 탈취"
  },
  {
    "id": "q528",
    "category": "보안",
    "type": "short",
    "prompt": "가능한 비밀번호를 전부 생성한 것이 아니라, 유출된 아이디·비밀번호 조합을 재활용하여 여러 사이트 로그인을 시도했다. 이 기법의 명칭을 쓰시오.",
    "answer": "크리덴셜 스터핑",
    "aliases": [
      "크리덴셜 스터핑",
      "Credential Stuffing",
      "크리덴셜 스터핑 공격",
      "Credential Stuffing Attack",
      "크리덴셜스터핑"
    ],
    "explanation": "유출된 자격 증명의 재사용입니다. 가능한 모든 조합을 만드는 무차별 대입과 구분하세요.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-credential-stuffing",
    "exercise": "compare",
    "patternGroup": "정보 탈취"
  },
  {
    "id": "q529",
    "category": "보안",
    "type": "short",
    "prompt": "서비스 거부라는 목적은 같지만 한 공격원이 아니라 여러 장치가 동시에 공격을 수행했다. DoS보다 구체적인 분산 공격의 약어를 쓰시오.",
    "answer": "DDoS",
    "aliases": [
      "DDoS",
      "Distributed Denial of Service",
      "DDoS 공격",
      "Distributed Denial of Service Attack",
      "분산 서비스 거부 공격"
    ],
    "explanation": "여러 공격원의 분산 수행이 DDoS의 구별 단서입니다.",
    "source": 2,
    "page": 19,
    "topic": "security",
    "concept": "security-ddos",
    "exercise": "compare",
    "patternGroup": "네트워크 공격"
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
const QUESTION_ID_MIGRATIONS = {"q214": "q104", "q215": "q105", "q216": "q106", "q217": "q107", "q218": "q108", "q219": "q109", "q220": "q110", "q221": "q449", "q222": "q112", "q223": "q113", "q224": "q114", "q225": "q115", "q226": "q116", "q227": "q117", "q228": "q118", "q229": "q119", "q230": "q120", "q231": "q121", "q232": "q122", "q233": "q123", "q234": "q124", "q235": "q125", "q236": "q126", "q237": "q127", "q238": "q128", "q239": "q129", "q240": "q130", "q241": "q131", "q242": "q132", "q243": "q133", "q244": "q134", "q245": "q135", "q246": "q136", "q247": "q137", "q248": "q138", "q249": "q139", "q250": "q140", "q251": "q141", "q252": "q142", "q253": "q143", "q254": "q144", "q255": "q145", "q256": "q146", "q257": "q147", "q258": "q148", "q259": "q149", "q260": "q150", "q261": "q151", "q111": "q449", "q448": "q449", "q450": "q451", "q452": "q453", "q454": "q455", "q456": "q457", "q458": "q459", "q460": "q461", "q462": "q463", "q464": "q465", "q466": "q467"};
const FOCUS_CONCEPTS = [{"id": "abstract-factory", "topic": "pattern", "name": "추상 팩토리", "english": "Abstract Factory", "group": "생성", "summary": "서로 관련된 객체들을 제품군 단위로 생성한다. 구체 클래스에 직접 의존하지 않는 생성 인터페이스를 제공한다.", "contrast": "팩토리 메서드는 생성 메서드를 하위 클래스에서 결정하고, 추상 팩토리는 연관된 제품군을 생성합니다."}, {"id": "builder", "topic": "pattern", "name": "빌더", "english": "Builder", "group": "생성", "summary": "복잡한 객체를 단계별로 조립한다. 생성 절차와 완성된 표현을 분리할 수 있다.", "contrast": "빌더는 단계별 조립, 추상 팩토리는 관련 제품군의 생성에 초점을 둡니다."}, {"id": "factory-method", "topic": "pattern", "name": "팩토리 메서드", "english": "Factory Method", "group": "생성", "summary": "상위 클래스가 생성 메서드의 틀을 제공하고 실제로 만들 객체의 클래스는 하위 클래스가 결정한다.", "contrast": "객체 생성의 결정을 하위 클래스로 위임한다는 단서가 핵심입니다."}, {"id": "prototype", "topic": "pattern", "name": "프로토타입", "english": "Prototype", "group": "생성", "summary": "기존 객체를 복제하여 새 객체를 만든다. 초기화 비용이 큰 객체를 재사용할 때 유용하다.", "contrast": "시제품으로 요구사항을 확인하는 개발 모형과 이름은 같지만, GoF에서는 객체 복제 방식입니다."}, {"id": "singleton", "topic": "pattern", "name": "싱글톤", "english": "Singleton", "group": "생성", "summary": "클래스의 인스턴스가 하나만 존재하도록 하고 공통 접근 지점을 제공한다.", "contrast": "공유 인스턴스 한 개를 보장하는 것이 핵심입니다. 플라이웨이트는 여러 객체의 공통 상태를 공유합니다."}, {"id": "adapter", "topic": "pattern", "name": "어댑터", "english": "Adapter", "group": "구조", "summary": "기존 클래스의 인터페이스를 이용자가 기대하는 인터페이스로 변환한다.", "contrast": "어댑터는 인터페이스 호환, 퍼사드는 복잡한 기능의 사용 단순화가 목적입니다."}, {"id": "bridge", "topic": "pattern", "name": "브리지", "english": "Bridge", "group": "구조", "summary": "추상화와 구현을 분리하여 두 부분을 서로 독립적으로 확장하게 한다.", "contrast": "브리지는 처음부터 추상화와 구현을 분리합니다. 어댑터는 이미 다른 인터페이스 사이를 맞춥니다."}, {"id": "composite", "topic": "pattern", "name": "컴포지트", "english": "Composite", "group": "구조", "summary": "단일 객체와 복합 객체를 같은 인터페이스로 다룬다. 전체와 부분을 트리로 구성한다.", "contrast": "전체·부분의 트리 구조와 단일·복합 객체의 동일한 처리가 핵심입니다."}, {"id": "decorator", "topic": "pattern", "name": "데코레이터", "english": "Decorator", "group": "구조", "summary": "객체를 감싸는 방식으로 부가 기능을 동적으로 추가한다. 기본 인터페이스는 유지한다.", "contrast": "데코레이터는 부가 기능을 추가합니다. 프록시는 원본에 대한 접근을 대신 관리합니다."}, {"id": "facade", "topic": "pattern", "name": "퍼사드", "english": "Facade", "group": "구조", "summary": "여러 하위 시스템을 쉽게 이용하도록 단순한 상위 인터페이스를 제공한다.", "contrast": "퍼사드는 복잡한 시스템의 사용을 단순하게 합니다. 어댑터는 호출 규격을 맞춥니다."}, {"id": "flyweight", "topic": "pattern", "name": "플라이웨이트", "english": "Flyweight", "group": "구조", "summary": "많은 객체가 공통으로 사용하는 상태를 공유하여 메모리를 줄인다.", "contrast": "플라이웨이트는 공통 상태 공유, 싱글톤은 클래스 인스턴스 수 제한입니다."}, {"id": "proxy", "topic": "pattern", "name": "프록시", "english": "Proxy", "group": "구조", "summary": "실제 객체를 대신하는 대리 객체로 접근을 제어한다. 지연 생성이나 권한 확인 등을 맡길 수 있다.", "contrast": "프록시는 원본 접근을 대신합니다. 데코레이터는 원본 동작에 기능을 덧붙입니다."}, {"id": "chain-of-responsibility", "topic": "pattern", "name": "책임 연쇄", "english": "Chain of Responsibility", "group": "행위", "summary": "여러 처리자를 연결하여 요청을 처리할 수 있는 객체로 순서대로 전달한다.", "contrast": "처리자들의 연결을 따라 책임이 이동하는 것이 핵심입니다."}, {"id": "command", "topic": "pattern", "name": "커맨드", "english": "Command", "group": "행위", "summary": "요청을 객체로 캡슐화하여 실행, 저장, 취소 등을 독립적으로 다룬다.", "contrast": "커맨드는 요청 자체를 객체로 만듭니다. 메멘토는 객체 상태의 저장·복원이 핵심입니다."}, {"id": "interpreter", "topic": "pattern", "name": "인터프리터", "english": "Interpreter", "group": "행위", "summary": "간단한 언어의 문법 규칙을 표현하고 그 규칙에 따라 문장을 해석한다.", "contrast": "여기서는 GoF의 문법 규칙 및 해석 패턴을 묻습니다. 아키텍처의 해석기 구성과 범위를 구분하세요."}, {"id": "iterator", "topic": "pattern", "name": "반복자", "english": "Iterator", "group": "행위", "summary": "컬렉션의 내부 표현을 공개하지 않고 요소를 순서대로 탐색한다.", "contrast": "컬렉션의 내부 구조와 탐색 과정을 분리합니다."}, {"id": "mediator", "topic": "pattern", "name": "중재자", "english": "Mediator", "group": "행위", "summary": "여러 객체의 상호작용을 중재 객체에 모아 객체 사이의 직접 의존을 줄인다.", "contrast": "중재자는 객체 사이의 조정, 옵서버는 상태 변화의 일대다 통지가 핵심입니다."}, {"id": "memento", "topic": "pattern", "name": "메멘토", "english": "Memento", "group": "행위", "summary": "객체 내부 상태를 보관하고 나중에 해당 시점의 상태로 복원한다.", "contrast": "메멘토는 상태 보관, 커맨드는 실행 요청의 객체화입니다."}, {"id": "observer", "topic": "pattern", "name": "옵서버", "english": "Observer", "group": "행위", "summary": "관찰 대상의 상태가 바뀌면 등록된 관찰자들에게 알려 주는 일대다 관계를 정의한다.", "contrast": "옵서버는 구독자에게 상태 변화를 통지합니다. 중재자는 객체 간 상호작용을 조정합니다."}, {"id": "state", "topic": "pattern", "name": "상태", "english": "State", "group": "행위", "summary": "객체의 현재 상태별 동작을 각각 캡슐화하여 동일한 요청이 상태에 따라 다르게 처리되게 한다.", "contrast": "상태는 객체의 상태에 따른 동작, 전략은 교체 가능한 알고리즘의 선택입니다."}, {"id": "strategy", "topic": "pattern", "name": "전략", "english": "Strategy", "group": "행위", "summary": "같은 목적을 가진 여러 알고리즘을 캡슐화하여 상호 교환하게 한다.", "contrast": "전략은 알고리즘 교체, 상태는 상태 변화에 따른 동작 변경입니다."}, {"id": "template-method", "topic": "pattern", "name": "템플릿 메서드", "english": "Template Method", "group": "행위", "summary": "알고리즘의 공통 골격을 상위 클래스에 정의하고 일부 단계를 하위 클래스가 구현하게 한다.", "contrast": "템플릿 메서드는 상속으로 세부 단계를 바꿉니다. 전략은 알고리즘을 별도 객체로 교체합니다."}, {"id": "visitor", "topic": "pattern", "name": "방문자", "english": "Visitor", "group": "행위", "summary": "객체 구조를 크게 바꾸지 않고 외부 방문 객체에 새로운 연산을 추가한다.", "contrast": "방문자는 처리 연산을 객체 구조와 분리합니다. 반복자는 원소 탐색에 초점을 둡니다."}, {"id": "arch-layered", "topic": "architecture", "name": "계층형", "english": "Layered", "group": "아키텍처", "summary": "시스템을 책임별 계층으로 나누어 계층 사이의 정해진 인터페이스로 처리한다.", "contrast": "계층형은 전체 시스템의 책임 분할입니다. MVC는 데이터·표시·입력 제어의 역할 분리에 초점을 둡니다."}, {"id": "arch-client-server", "topic": "architecture", "name": "클라이언트 서버", "english": "Client Server", "group": "아키텍처", "summary": "서비스를 요청하는 클라이언트와 요청을 처리하는 서버로 구성한다.", "contrast": "요청자와 서비스 제공자의 구분이 핵심입니다."}, {"id": "arch-pipe-filter", "topic": "architecture", "name": "파이프 필터", "english": "Pipe Filter", "group": "아키텍처", "summary": "각 처리 단계를 필터로 분리하고 단계 사이의 데이터 흐름을 파이프로 연결한다.", "contrast": "독립된 변환 단계와 단계 사이 데이터 전달이 핵심입니다."}, {"id": "arch-mvc", "topic": "architecture", "name": "MVC", "english": "MVC", "group": "아키텍처", "summary": "데이터 및 핵심 처리, 화면 표시, 사용자 입력 제어를 서로 다른 역할로 분리한다.", "contrast": "Model·View·Controller의 역할을 구분하세요. GoF 생성·구조·행위 분류에는 넣지 않습니다."}, {"id": "arch-master-slave", "topic": "architecture", "name": "마스터 슬레이브", "english": "Master Slave", "group": "아키텍처", "summary": "한 컴포넌트가 작업을 분할·배포하고 여러 작업 컴포넌트의 결과를 취합한다.", "contrast": "마스터는 작업 분배와 결과 취합, 슬레이브는 할당된 작업 처리를 맡습니다."}, {"id": "arch-broker", "topic": "architecture", "name": "브로커", "english": "Broker", "group": "아키텍처", "summary": "분산된 서비스 제공자와 이용자 사이에서 중개 컴포넌트가 요청과 응답을 연결한다.", "contrast": "브로커는 분산 서비스의 호출 중개입니다. GoF 중재자와 설계 범위를 구분하세요."}, {"id": "arch-peer-to-peer", "topic": "architecture", "name": "피어 투 피어", "english": "Peer to Peer", "group": "아키텍처", "summary": "각 참여 노드가 서비스 이용자와 제공자의 역할을 모두 수행할 수 있다.", "contrast": "노드가 클라이언트와 서버 역할을 함께 수행한다는 점이 핵심입니다."}, {"id": "arch-event-bus", "topic": "architecture", "name": "이벤트 버스", "english": "Event Bus", "group": "아키텍처", "summary": "발행한 이벤트를 채널에 등록된 구독자들이 전달받아 처리한다.", "contrast": "이벤트 버스는 채널을 통한 시스템 간 이벤트 전달입니다. 옵서버는 관찰 대상과 관찰자의 일대다 관계입니다."}, {"id": "arch-blackboard", "topic": "architecture", "name": "블랙보드", "english": "Blackboard", "group": "아키텍처", "summary": "여러 전문 처리 컴포넌트가 공통 작업 공간의 결과를 읽고 갱신하며 문제를 해결한다.", "contrast": "공유 지식·작업 공간을 중심으로 여러 처리자가 협력한다는 단서가 핵심입니다."}, {"id": "arch-interpreter-architecture", "topic": "architecture", "name": "인터프리터", "english": "Interpreter Architecture", "group": "아키텍처", "summary": "실행할 프로그램이나 명령을 표현하는 데이터와 이를 해석하는 엔진을 중심으로 구성한다.", "contrast": "아키텍처에서는 해석 엔진을 중심으로 한 시스템 구성, GoF에서는 문법 규칙의 객체화를 묻습니다."}, {"id": "exam-normalization", "topic": "core", "name": "정규화·함수 종속", "english": "", "group": "실기 출제 표기 확인", "summary": "첨부한 시나공 실기 핵심요약에서 해당 주제의 실기 출제 표기를 확인했습니다.", "contrast": "교재 표기: 2024.4, 2021.7 · PDF 22쪽. 문제는 이 개념을 바탕으로 재구성한 변형이며 기출 원문이 아닙니다."}, {"id": "exam-transaction", "topic": "core", "name": "트랜잭션 특성", "english": "", "group": "실기 출제 표기 확인", "summary": "첨부한 시나공 실기 핵심요약에서 해당 주제의 실기 출제 표기를 확인했습니다.", "contrast": "교재 표기: 2021.7, 2020.5 · PDF 26쪽. 문제는 이 개념을 바탕으로 재구성한 변형이며 기출 원문이 아닙니다."}, {"id": "exam-coupling", "topic": "core", "name": "결합도", "english": "", "group": "실기 출제 표기 확인", "summary": "첨부한 시나공 실기 핵심요약에서 해당 주제의 실기 출제 표기를 확인했습니다.", "contrast": "교재 표기: 2025.4, 2024.7, 2021.10, 2021.4 · PDF 36쪽. 문제는 이 개념을 바탕으로 재구성한 변형이며 기출 원문이 아닙니다."}, {"id": "exam-cohesion", "topic": "core", "name": "응집도", "english": "", "group": "실기 출제 표기 확인", "summary": "첨부한 시나공 실기 핵심요약에서 해당 주제의 실기 출제 표기를 확인했습니다.", "contrast": "교재 표기: 2024.7, 2021.7 · PDF 36쪽. 문제는 이 개념을 바탕으로 재구성한 변형이며 기출 원문이 아닙니다."}, {"id": "exam-sql-group", "topic": "core", "name": "GROUP BY·HAVING", "english": "", "group": "실기 출제 표기 확인", "summary": "첨부한 시나공 실기 핵심요약에서 해당 주제의 실기 출제 표기를 확인했습니다.", "contrast": "교재 표기: 2024.7, 2023.4, 2020.11, 2020.10 · PDF 61쪽. 문제는 이 개념을 바탕으로 재구성한 변형이며 기출 원문이 아닙니다."}, {"id": "exam-sql-aggregate", "topic": "core", "name": "SQL 집계·NULL", "english": "", "group": "실기 출제 표기 확인", "summary": "첨부한 시나공 실기 핵심요약에서 해당 주제의 실기 출제 표기를 확인했습니다.", "contrast": "교재 표기: 2025.11, 2023.4, 2022.10, 2021.4 · PDF 60쪽. 문제는 이 개념을 바탕으로 재구성한 변형이며 기출 원문이 아닙니다."}, {"id": "exam-sql-set", "topic": "core", "name": "SQL 집합 연산", "english": "", "group": "실기 출제 표기 확인", "summary": "첨부한 시나공 실기 핵심요약에서 해당 주제의 실기 출제 표기를 확인했습니다.", "contrast": "교재 표기: 2023.10 · PDF 61쪽. 문제는 이 개념을 바탕으로 재구성한 변형이며 기출 원문이 아닙니다."}, {"id": "exam-sql-sort", "topic": "core", "name": "SQL 정렬", "english": "", "group": "실기 출제 표기 확인", "summary": "첨부한 시나공 실기 핵심요약에서 해당 주제의 실기 출제 표기를 확인했습니다.", "contrast": "교재 표기: 2022.5, 2021.7 · PDF 59쪽. 문제는 이 개념을 바탕으로 재구성한 변형이며 기출 원문이 아닙니다."}, {"id": "exam-sql-subquery", "topic": "core", "name": "SQL 하위 질의", "english": "", "group": "실기 출제 표기 확인", "summary": "첨부한 시나공 실기 핵심요약에서 해당 주제의 실기 출제 표기를 확인했습니다.", "contrast": "교재 표기: 2024.10, 2024.4, 2022.7 · PDF 60쪽. 문제는 이 개념을 바탕으로 재구성한 변형이며 기출 원문이 아닙니다."}, {"id": "exam-pattern-abstract-factory", "topic": "core", "name": "추상 팩토리", "english": "", "group": "실기 출제 표기 확인", "summary": "첨부한 시나공 실기 핵심요약에서 해당 주제의 실기 출제 표기를 확인했습니다.", "contrast": "교재 표기: 2024.4 · PDF 39쪽. 문제는 이 개념을 바탕으로 재구성한 변형이며 기출 원문이 아닙니다."}, {"id": "exam-pattern-factory-method", "topic": "core", "name": "팩토리 메서드", "english": "", "group": "실기 출제 표기 확인", "summary": "첨부한 시나공 실기 핵심요약에서 해당 주제의 실기 출제 표기를 확인했습니다.", "contrast": "교재 표기: 2021.10 · PDF 39쪽. 문제는 이 개념을 바탕으로 재구성한 변형이며 기출 원문이 아닙니다."}, {"id": "exam-pattern-adapter", "topic": "core", "name": "어댑터", "english": "", "group": "실기 출제 표기 확인", "summary": "첨부한 시나공 실기 핵심요약에서 해당 주제의 실기 출제 표기를 확인했습니다.", "contrast": "교재 표기: 2025.4 · PDF 39쪽. 문제는 이 개념을 바탕으로 재구성한 변형이며 기출 원문이 아닙니다."}, {"id": "exam-pattern-bridge", "topic": "core", "name": "브리지", "english": "", "group": "실기 출제 표기 확인", "summary": "첨부한 시나공 실기 핵심요약에서 해당 주제의 실기 출제 표기를 확인했습니다.", "contrast": "교재 표기: 2022.10 · PDF 40쪽. 문제는 이 개념을 바탕으로 재구성한 변형이며 기출 원문이 아닙니다."}, {"id": "exam-pattern-proxy", "topic": "core", "name": "프록시", "english": "", "group": "실기 출제 표기 확인", "summary": "첨부한 시나공 실기 핵심요약에서 해당 주제의 실기 출제 표기를 확인했습니다.", "contrast": "교재 표기: 2025.7, 2023.4 · PDF 40쪽. 문제는 이 개념을 바탕으로 재구성한 변형이며 기출 원문이 아닙니다."}, {"id": "exam-pattern-iterator", "topic": "core", "name": "반복자", "english": "", "group": "실기 출제 표기 확인", "summary": "첨부한 시나공 실기 핵심요약에서 해당 주제의 실기 출제 표기를 확인했습니다.", "contrast": "교재 표기: 2024.7 · PDF 40쪽. 문제는 이 개념을 바탕으로 재구성한 변형이며 기출 원문이 아닙니다."}, {"id": "exam-pattern-observer", "topic": "core", "name": "옵서버", "english": "", "group": "실기 출제 표기 확인", "summary": "첨부한 시나공 실기 핵심요약에서 해당 주제의 실기 출제 표기를 확인했습니다.", "contrast": "교재 표기: 2022.10, 2020.7 · PDF 41쪽. 문제는 이 개념을 바탕으로 재구성한 변형이며 기출 원문이 아닙니다."}, {"id": "security-virus", "topic": "security", "name": "바이러스", "english": "Virus", "group": "악성코드", "summary": "다른 실행 파일이나 부트 영역 등에 자신의 코드를 붙여 감염시키고 숙주가 실행될 때 함께 동작한다.", "contrast": "바이러스는 숙주 감염, 웜은 독립적인 자기 전파가 핵심입니다."}, {"id": "security-worm", "topic": "security", "name": "웜", "english": "Worm", "group": "악성코드", "summary": "다른 프로그램에 기생하지 않고 독립적으로 실행되며 네트워크 등을 통해 자신을 복제하고 전파한다.", "contrast": "웜은 자기 전파, 트로이 목마는 정상 프로그램 위장이 핵심입니다."}, {"id": "security-trojan", "topic": "security", "name": "트로이 목마", "english": "Trojan Horse", "group": "악성코드", "summary": "정상적인 프로그램처럼 보이게 위장하여 사용자가 실행하도록 유도한다. 자기 복제는 일반적인 특징이 아니다.", "contrast": "트로이 목마는 위장 실행입니다. 파일 감염·자기 전파와 구분하세요."}, {"id": "security-ransomware", "topic": "security", "name": "랜섬웨어", "english": "Ransomware", "group": "악성코드", "summary": "데이터를 암호화하거나 이용을 막은 뒤 복구를 대가로 금전을 요구한다.", "contrast": "암호화·이용 방해 후 금전 요구가 핵심입니다."}, {"id": "security-backdoor", "topic": "security", "name": "백도어", "english": "Backdoor", "group": "악성코드", "summary": "정상적인 인증이나 접근 통제를 우회하여 시스템에 접근하도록 남겨 둔 숨은 통로이다.", "contrast": "백도어는 우회 접근 통로입니다. 루트킷은 침해 흔적이나 악성 동작을 숨기는 도구 모음에 초점을 둡니다."}, {"id": "security-rootkit", "topic": "security", "name": "루트킷", "english": "Rootkit", "group": "악성코드", "summary": "침해된 시스템에서 권한 유지와 악성 활동의 은폐 등을 위해 사용하는 도구들의 모음이다.", "contrast": "루트킷은 도구 모음과 은폐, 백도어는 우회 접근 통로입니다."}, {"id": "security-xss", "topic": "security", "name": "XSS", "english": "Cross-Site Scripting", "group": "웹 공격", "summary": "웹 페이지에 주입한 스크립트가 방문자의 브라우저에서 실행되도록 하는 공격이다.", "contrast": "XSS는 브라우저에서 스크립트 실행, CSRF는 인증된 사용자의 의도하지 않은 요청입니다."}, {"id": "security-csrf", "topic": "security", "name": "CSRF", "english": "Cross-Site Request Forgery", "group": "웹 공격", "summary": "인증된 사용자가 자신의 의도와 다른 요청을 웹사이트에 보내도록 유도한다.", "contrast": "이미 인증된 사용자의 권한을 이용한 요청 위조가 핵심입니다."}, {"id": "security-sql-injection", "topic": "security", "name": "SQL 삽입", "english": "SQL Injection", "group": "웹 공격", "summary": "검증되지 않은 입력이 SQL 명령의 일부로 해석되어 데이터베이스 질의의 의미가 바뀌는 공격이다.", "contrast": "SQL 삽입은 서버의 데이터베이스 질의 조작입니다. XSS는 방문자 브라우저의 스크립트 실행입니다."}, {"id": "security-dos", "topic": "security", "name": "DoS", "english": "Denial of Service", "group": "네트워크 공격", "summary": "과도한 요청이나 취약점 악용 등으로 시스템이 정상적인 서비스를 제공하지 못하게 하는 공격이다.", "contrast": "DoS는 서비스 거부 공격의 통칭입니다. 여러 공격원에서 분산 수행하면 DDoS라고 합니다."}, {"id": "security-ddos", "topic": "security", "name": "DDoS", "english": "Distributed Denial of Service", "group": "네트워크 공격", "summary": "여러 장치에서 동시에 하나의 서비스에 공격을 가하여 가용성을 방해하는 분산 서비스 거부 공격이다.", "contrast": "여러 공격원의 분산 수행이 DDoS의 구별 단서입니다."}, {"id": "security-smurf", "topic": "security", "name": "스머프", "english": "Smurf", "group": "네트워크 공격", "summary": "피해자 주소로 위장한 ICMP 요청을 브로드캐스트하여 다수의 응답이 피해자에게 집중되게 한다.", "contrast": "ICMP·브로드캐스트·응답 집중이 스머프의 핵심 단서입니다."}, {"id": "security-land", "topic": "security", "name": "랜드", "english": "LAND", "group": "네트워크 공격", "summary": "패킷의 출발지와 목적지 주소를 모두 공격 대상의 주소로 설정하는 공격이다.", "contrast": "출발지와 목적지가 모두 피해자 주소라는 단서를 확인하세요."}, {"id": "security-teardrop", "topic": "security", "name": "티어드롭", "english": "Teardrop", "group": "네트워크 공격", "summary": "조각난 IP 패킷의 오프셋 등 단편 정보를 비정상적으로 조작하여 재조립 처리를 방해한다.", "contrast": "단편화 정보와 재조립 오류가 핵심입니다."}, {"id": "security-syn-flooding", "topic": "security", "name": "SYN 플러딩", "english": "SYN Flooding", "group": "네트워크 공격", "summary": "TCP 연결 설정을 끝내지 않는 요청을 대량으로 보내 반쯤 열린 연결 자원을 소모시킨다.", "contrast": "연결 설정 미완료 상태로 대기 자원을 소모하는 SYN 플러딩입니다."}, {"id": "security-sniffing", "topic": "security", "name": "스니핑", "english": "Sniffing", "group": "네트워크 공격", "summary": "네트워크에서 전달되는 패킷을 도청하여 통신 내용을 수집한다.", "contrast": "스니핑은 엿보기, 스푸핑은 신원·주소 위장입니다."}, {"id": "security-spoofing", "topic": "security", "name": "스푸핑", "english": "Spoofing", "group": "네트워크 공격", "summary": "신뢰할 수 있는 다른 시스템이나 사용자처럼 주소·신원을 위장한다.", "contrast": "위장이 핵심입니다. 패킷을 수동적으로 엿보는 스니핑과 구분하세요."}, {"id": "security-session-hijacking", "topic": "security", "name": "세션 하이재킹", "english": "Session Hijacking", "group": "네트워크 공격", "summary": "정상 사용자의 세션 식별 정보 등을 가로채 그 사용자로 가장하여 연결을 이용한다.", "contrast": "인증된 세션의 탈취·가로채기가 핵심입니다."}, {"id": "security-phishing", "topic": "security", "name": "피싱", "english": "Phishing", "group": "정보 탈취", "summary": "신뢰할 만한 기관이나 사람을 사칭하여 민감한 정보를 제공하도록 속인다.", "contrast": "발신자·기관 사칭과 정보 제공 유도가 핵심입니다."}, {"id": "security-smishing", "topic": "security", "name": "스미싱", "english": "Smishing", "group": "정보 탈취", "summary": "문자 메시지를 이용하여 악성 링크 접속이나 앱 설치를 유도하고 정보를 탈취한다.", "contrast": "문자 메시지(SMS)가 스미싱의 구별 단서입니다."}, {"id": "security-pharming", "topic": "security", "name": "파밍", "english": "Pharming", "group": "정보 탈취", "summary": "이름 해석이나 호스트 설정 등을 조작하여 정상 주소로 접속하려는 사용자를 위조 사이트로 보낸다.", "contrast": "파밍은 주소 해석·접속 경로 조작, 피싱은 사칭 메시지 등으로 정보를 유도하는 것이 핵심입니다."}, {"id": "security-spear-phishing", "topic": "security", "name": "스피어 피싱", "english": "Spear Phishing", "group": "정보 탈취", "summary": "특정 개인이나 조직을 표적으로 삼아 맞춤형 사칭 메시지로 정보를 탈취한다.", "contrast": "불특정 다수보다 특정 표적에 맞춘 공격이라는 점이 핵심입니다."}, {"id": "security-credential-stuffing", "topic": "security", "name": "크리덴셜 스터핑", "english": "Credential Stuffing", "group": "정보 탈취", "summary": "다른 곳에서 유출된 계정·비밀번호 조합을 여러 서비스의 로그인에 재사용한다.", "contrast": "유출된 자격 증명의 재사용입니다. 가능한 모든 조합을 만드는 무차별 대입과 구분하세요."}, {"id": "security-watering-hole", "topic": "security", "name": "워터링 홀", "english": "Watering Hole", "group": "정보 탈취", "summary": "공격 대상이 자주 방문하는 웹사이트를 미리 침해하여 대상의 방문을 기다린다.", "contrast": "대상이 자주 가는 사이트를 먼저 침해한다는 것이 단서입니다."}];
