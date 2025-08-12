# PL/SQL サンプルリポジトリ - CRUD操作図

## 概要
このドキュメントは、DevinTest PL/SQLサンプルリポジトリ内のすべてのCRUD（Create, Read, Update, Delete）操作を視覚的に表現したものです。

## データベースエンティティ関係図

```mermaid
erDiagram
    EMPLOYEES {
        number employee_id PK
        varchar2 first_name
        varchar2 last_name
        varchar2 email
        varchar2 phone_number
        date hire_date
        varchar2 job_id FK
        number salary
        number commission_pct
        number manager_id FK
        number department_id FK
    }
    
    DEPARTMENTS {
        number department_id PK
        varchar2 department_name
        number manager_id FK
        number location_id FK
    }
    
    JOBS {
        varchar2 job_id PK
        varchar2 job_title
        number min_salary
        number max_salary
    }
    
    JOB_HISTORY {
        number employee_id PK,FK
        date start_date PK
        date end_date
        varchar2 job_id FK
        number department_id FK
    }
    
    LOCATIONS {
        number location_id PK
        varchar2 street_address
        varchar2 postal_code
        varchar2 city
        varchar2 state_province
        varchar2 country_id
    }
    
    SALARY_HISTORY {
        number employee_id PK,FK
        date changedon PK
        number old_salary
        number new_salary
    }
    
    STUDENTS {
        number admno PK
        varchar2 name
        marks_array marks
    }
    
    EMPLOYEES ||--o{ JOB_HISTORY : has
    EMPLOYEES }o--|| JOBS : assigned_to
    EMPLOYEES }o--|| DEPARTMENTS : belongs_to
    EMPLOYEES ||--o{ SALARY_HISTORY : has
    DEPARTMENTS }o--|| LOCATIONS : located_at
    DEPARTMENTS }o--|| EMPLOYEES : managed_by
    JOB_HISTORY }o--|| JOBS : references
    JOB_HISTORY }o--|| DEPARTMENTS : in
```

## EMPLOYEES テーブル CRUD操作

```mermaid
graph TD
    A[EMPLOYEES テーブル] --> B[CREATE操作]
    A --> C[READ操作]
    A --> D[UPDATE操作]
    A --> E[DELETE操作]
    
    B --> B1[insert_entertainment_dept.sql<br/>新部署作成時の従業員参照]
    
    C --> C1[get_employees_by_dept.sql<br/>部署別従業員取得]
    C --> C2[get_highest_paid_employees.sql<br/>最高給与従業員取得]
    C --> C3[employees_by_year.sql<br/>年別従業員表示]
    C --> C4[dept_highest_salaried_emp.sql<br/>部署最高給与従業員]
    C --> C5[employee_info.sql<br/>従業員情報取得]
    C --> C6[salary_stats.sql<br/>給与統計分析]
    C --> C7[BONUS_CALCULATION.SQL<br/>ボーナス計算]
    C --> C8[display_dept_costly_experienced_emp.sql<br/>高コスト経験従業員]
    
    D --> D1[update_salary プロシージャ<br/>基本給与更新]
    D --> D2[update_salary2 プロシージャ<br/>拡張給与更新]
    D --> D3[hike_salary_for_150.sql<br/>特定従業員給与増加]
    D --> D4[interchange_salary.sql<br/>給与交換操作]
    D --> D5[change_department_manager.sql<br/>部署マネージャー変更]
    D --> D6[Procedure Change_Manager<br/>マネージャー変更]
    
    E --> E1[delete_rows 関数<br/>動的行削除]
```

## DEPARTMENTS テーブル CRUD操作

```mermaid
graph TD
    A[DEPARTMENTS テーブル] --> B[CREATE操作]
    A --> C[READ操作]
    A --> D[UPDATE操作]
    
    B --> B1[insert_entertainment_dept.sql<br/>エンターテイメント部署挿入]
    
    C --> C1[displays_dept_details.sql<br/>部署詳細表示]
    C --> C2[dept_details_lessthan_5_emp.sql<br/>小規模部署分析]
    C --> C3[dept_hod_city_noemployees.sql<br/>部署長・所在地分析]
    C --> C4[display_dept_costly_experienced_emp.sql<br/>部署コスト分析]
    
    D --> D1[change_department_manager.sql<br/>部署マネージャー変更]
    D --> D2[trg_department_manager_check<br/>部署マネージャー検証トリガー]
```

## SALARY_HISTORY テーブル CRUD操作

```mermaid
graph TD
    A[SALARY_HISTORY テーブル] --> B[CREATE操作]
    A --> C[READ操作]
    
    B --> B1[CREATE TABLE salary_history<br/>テーブル作成]
    B --> B2[trg_salary_check トリガー<br/>給与変更時自動挿入]
    B --> B3[update_salary2 プロシージャ<br/>履歴記録付き給与更新]
    
    C --> C1[Salary History Trigger<br/>給与履歴参照]
    C --> C2[employees_old_new_salaries.sql<br/>旧新給与比較]
```

## JOBS テーブル CRUD操作

```mermaid
graph TD
    A[JOBS テーブル] --> B[READ操作]
    A --> C[DELETE操作]
    
    B --> B1[job_summary_2.sql<br/>包括的職種サマリー]
    B --> B2[jobs_summary.sql<br/>職種サマリーレポート]
    B --> B3[get_top_employees 関数<br/>職種別最高給与従業員]
    
    C --> C1[delete_job プロシージャ<br/>職種削除]
```

## STUDENTS テーブル CRUD操作（VARRAY デモ）

```mermaid
graph TD
    A[STUDENTS テーブル] --> B[CREATE操作]
    A --> C[READ操作]
    A --> D[UPDATE操作]
    
    B --> B1[CREATE TABLE students<br/>学生テーブル作成]
    B --> B2[INSERT INTO students<br/>学生データ挿入]
    
    C --> C1[SELECT marks FROM students<br/>成績取得]
    C --> C2[GetMarks 関数<br/>特定成績取得]
    
    D --> D1[AddMarks プロシージャ<br/>成績追加]
    D --> D2[UPDATE students SET marks<br/>成績配列更新]
```

## トリガー操作フロー

```mermaid
graph TD
    A[データ変更操作] --> B{トリガー種別}
    
    B --> C[trg_commission_check]
    B --> D[trg_salary_check]
    B --> E[trg_employees_log]
    B --> F[trg_start_date_hire_date_check]
    
    C --> C1[BEFORE INSERT/UPDATE<br/>commission_pct on EMPLOYEES]
    C1 --> C2[トロント従業員の手数料チェック]
    C2 --> C3[エラー発生または処理継続]
    
    D --> D1[BEFORE UPDATE<br/>salary on EMPLOYEES]
    D1 --> D2[給与減額防止チェック]
    D2 --> D3[SALARY_HISTORY テーブルに記録]
    
    E --> E1[AFTER INSERT/UPDATE/DELETE<br/>on EMPLOYEES]
    E1 --> E2[従業員変更ログ記録]
    
    F --> F1[BEFORE INSERT/UPDATE<br/>start_date on JOB_HISTORY]
    F1 --> F2[開始日と雇用日の整合性チェック]
```

## 例外処理パターン

```mermaid
graph TD
    A[PL/SQL実行] --> B{例外発生}
    
    B -->|YES| C[例外処理]
    B -->|NO| D[正常終了]
    
    C --> E{例外種別}
    
    E --> F[NO_DATA_FOUND<br/>missing_employee_ids_with_exceptions.sql]
    E --> G[TOO_MANY_ROWS<br/>dept_highest_salaried_emp.sql]
    E --> H[USER_DEFINED<br/>update_salary プロシージャ]
    E --> I[CONSTRAINT_VIOLATION<br/>ex_handling_demo1.sql]
    
    F --> J[欠落従業員ID特定]
    G --> K[複数従業員処理]
    H --> L[カスタムエラーメッセージ]
    I --> M[制約違反ハンドリング]
```

## 動的SQL操作

```mermaid
graph TD
    A[動的SQL要求] --> B[delete_rows 関数]
    
    B --> C[EXECUTE IMMEDIATE]
    C --> D[動的DELETE文実行]
    D --> E[SQL%ROWCOUNT 取得]
    E --> F[削除行数返却]
    
    B --> G{例外処理}
    G -->|エラー| H[RAISE_APPLICATION_ERROR]
    G -->|成功| I[削除行数返却]
```

## ファイル別CRUD操作マッピング

| ファイル名 | CREATE | READ | UPDATE | DELETE |
|------------|--------|------|--------|--------|
| `get_employees_by_dept.sql` | - | ✓ | - | - |
| `update_salary` | - | ✓ | ✓ | - |
| `BONUS_CALCULATION.SQL` | - | ✓ | - | - |
| `trg_salary_check` | ✓ | - | - | - |
| `delete_rows` | - | - | - | ✓ |
| `VARRAY Demo` | ✓ | ✓ | ✓ | - |
| `insert_entertainment_dept.sql` | ✓ | ✓ | - | - |
| `salary_stats.sql` | - | ✓ | - | - |
| `employees_by_year.sql` | - | ✓ | - | - |
| `dept_highest_salaried_emp.sql` | - | ✓ | - | - |
| `missing_employee_ids_with_exceptions.sql` | - | ✓ | - | - |
| `ex_handling_demo1.sql` | - | - | ✓ | - |
| `get_highest_paid_employees.sql` | - | ✓ | - | - |
| `interchange_salary.sql` | - | ✓ | ✓ | - |
| `change_department_manager.sql` | - | ✓ | ✓ | - |

---
*生成日: 2025年8月12日*  
*リポジトリ: hh4aws-creator/DevinTest*  
*68以上のPL/SQLファイルのCRUD操作を包括的に分析*
