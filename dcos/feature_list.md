# PL/SQL サンプルリポジトリ - 機能一覧

## 概要
このドキュメントは、DevinTest PL/SQLサンプルリポジトリで利用可能なすべての機能の包括的な一覧を提供します。

## 機能一覧

| 物理名 | 論理名 | 概要 | 英語概要 |
|--------|--------|------|----------|
| `get_employees_by_dept` | 部署別従業員取得関数 | 指定された部署IDの従業員の名前をカンマ区切りで返す関数 | Returns comma-separated list of employee first names for a given department ID |
| `update_salary` | 基本給与更新プロシージャ | 基本的な検証と例外処理を含む従業員給与更新プロシージャ | Updates employee salary with basic validation and exception handling |
| `update_salary2` | 拡張給与更新プロシージャ | 給与増加検証と履歴ログ機能を持つ拡張給与更新プロシージャ | Enhanced salary update with salary increase validation and history logging |
| `get_top_employees` | 最高給与従業員取得関数 | 指定された職種カテゴリで最高給与の従業員名を返す関数 | Returns names of employees with highest salary in a given job category |
| `BONUS_CALCULATION.SQL` | 従業員ボーナス計算スクリプト | 職歴と手数料率に基づいて従業員ボーナスを計算するスクリプト | Calculates employee bonuses based on job history and commission percentage |
| `trg_commission_check` | 手数料検証トリガー | トロントの従業員が手数料率を持つことを防ぐトリガー | Prevents employees in Toronto from having commission percentage |
| `trg_salary_check` | 給与履歴トリガー | 給与減額を防ぎ、給与変更を履歴テーブルに記録するトリガー | Prevents salary decreases and logs salary changes to history table |
| `delete_rows` | 動的行削除関数 | 動的SQLを使用して任意のテーブルから行を削除する汎用関数 | Generic function to delete rows from any table using dynamic SQL |
| `marks_array` | 学生成績VARRAY型 | 最大10個の学生成績を格納するカスタムVARRAY型 | Custom VARRAY type for storing up to 10 student marks |
| `GetMarks` | 成績取得関数 | 位置指定で学生成績配列から特定の成績を取得する関数 | Retrieves specific mark from student marks array by position |
| `AddMarks` | 成績追加プロシージャ | 既存の学生成績配列に新しい成績を追加するプロシージャ | Adds new mark to existing student marks array |
| `salary_stats.sql` | 給与統計分析スクリプト | 平均給与と比較した従業員給与分布を分析するスクリプト | Analyzes employee salary distribution compared to average salary |
| `get_highest_paid_employees` | 部署最高給与従業員取得関数 | 特定部署の最高給与従業員を返す関数 | Returns highest paid employees in a specific department |
| `employees_by_year.sql` | 雇用年別従業員分析スクリプト | 雇用年別（2000-2010年）に従業員をグループ化して表示するスクリプト | Displays employees grouped by their hire year (2000-2010) |
| `dept_highest_salaried_emp.sql` | 部署最高給与従業員検索スクリプト | 例外処理を含む各部署の最高給与従業員を検索するスクリプト | Finds highest salaried employee in each department with exception handling |
| `missing_employee_ids_with_exceptions.sql` | 欠落従業員ID検索スクリプト | 例外処理とネストブロックを使用して欠落従業員IDを特定するスクリプト | Identifies missing employee IDs using exception handling and nested blocks |
| `ex_handling_demo1.sql` | 例外処理デモスクリプト | 外部キーとnull値制約のエラーハンドリングを実演するスクリプト | Demonstrates error handling for foreign key and null value constraints |
| `month__employees__recent_year.sql` | 最近年月別従業員分析スクリプト | 最近の年の月別従業員データを分析するスクリプト | Analyzes employee data by month for recent years |
| `display_dept_costly_experienced_emp.sql` | 部署コスト分析スクリプト | 高コストで経験豊富な従業員を含む部署情報を表示するスクリプト | Displays department information with costly and experienced employees |
| `job_summary_2.sql` | 包括的職種サマリースクリプト | 給与、経験、トップパフォーマーを含む詳細な職種統計を提供するスクリプト | Provides detailed job statistics including salary, experience, and top performers |
| `missing_employeeids.sql` | 従業員IDギャップ分析スクリプト | 従業員ID順序のギャップを特定するスクリプト | Identifies gaps in employee ID sequences |
| `count_employees_by_month.sql` | 月別従業員数カウントスクリプト | 月別雇用従業員数をカウントするスクリプト | Counts employees hired by month |
| `dept_details_lessthan_5_emp.sql` | 小規模部署分析スクリプト | 5人未満の従業員を持つ部署を分析するスクリプト | Analyzes departments with fewer than 5 employees |
| `employees_old_new_salaries.sql` | 給与比較分析スクリプト | 従業員の旧給与と新給与を比較するスクリプト | Compares old and new salary values for employees |
| `insert_entertainment_dept.sql` | エンターテイメント部署設定スクリプト | 新しいエンターテイメント部署データを挿入するスクリプト | Inserts new entertainment department data |
| `hike_salary_for_150.sql` | 特定従業員給与増加スクリプト | 従業員ID 150の給与を増加させるスクリプト | Increases salary for employee ID 150 |
| `displays_dept_details.sql` | 部署詳細表示スクリプト | 包括的な部署情報を表示するスクリプト | Shows comprehensive department information |
| `jobs_summary.sql` | 職種サマリーレポートスクリプト | 全職種カテゴリのサマリーレポートを生成するスクリプト | Generates summary report of all job categories |
| `interchange_salary.sql` | 給与交換操作スクリプト | 従業員間の給与交換操作を実行するスクリプト | Performs salary interchange operations between employees |
| `current_job_start_date.sql` | 現在職務開始日取得スクリプト | 従業員の現在の職務開始日を取得するスクリプト | Retrieves current job start dates for employees |
| `dept_hod_city_noemployees.sql` | 部署長・所在地分析スクリプト | 部署長、都市、従業員数を分析するスクリプト | Analyzes department heads, cities, and employee counts |
| `dept_highest_salaried_emp3.sql` | 代替部署給与分析スクリプト | 部署別最高給与従業員を見つける代替アプローチ | Alternative approach to finding highest salaried employees by department |
| `employee_info.sql` | 従業員情報取得スクリプト | 包括的な従業員情報取得スクリプト | Comprehensive employee information retrieval |
| `current_job_start_date_for_all_employees.sql` | 全従業員職務開始日取得スクリプト | システム内全従業員の職務開始日を取得するスクリプト | Retrieves job start dates for all employees in the system |
| `change_department_manager.sql` | 部署マネージャー変更スクリプト | 部署マネージャーの割り当てを変更するスクリプト | Changes department manager assignments |
| `deptname_highest_exp_employee.sql` | 部署別最経験従業員検索スクリプト | 各部署で最も経験豊富な従業員を検索するスクリプト | Finds most experienced employee in each department |

## カテゴリ

### 従業員管理機能
- 部署、職種、その他の条件による従業員クエリ
- 従業員情報の取得と分析
- 従業員の雇用日と経験の分析

### 給与管理
- 検証機能付き給与更新プロシージャ
- 給与統計と比較分析
- 複数条件に基づくボーナス計算
- 給与履歴の追跡と監査

### データベーストリガー
- 所在地ベースのルールによる手数料検証
- 給与変更の検証とログ記録
- データ整合性の強制

### 例外処理
- 包括的なエラーハンドリングのデモンストレーション
- 欠落データの特定
- 制約違反の処理

### 高度なPL/SQL機能
- 学生成績用VARRAY実装
- 動的SQL実行
- カーソルベースのデータ処理
- ネストブロック構造

### 部署管理
- 部署の分析とレポート
- マネージャーの割り当てと変更
- 部署ベースの従業員統計

## 技術実装詳細

### データベーススキーマ
サンプルは以下の主要テーブルを持つ標準的なHRスキーマを前提としています：
- `employees` - 従業員マスターデータ
- `departments` - 部署情報
- `jobs` - 職種カテゴリとタイトル
- `job_history` - 従業員の職歴変更履歴
- `locations` - 地理的位置データ
- `salary_history` - 給与変更監査証跡
- `students` - 学生情報（VARRAYデモ用）

### 実証されている主要なPL/SQL概念
1. **関数とプロシージャ** - データ取得と操作のための様々な実装
2. **カーソル** - 明示的および暗黙的カーソルの使用
3. **例外処理** - ユーザー定義およびシステム例外
4. **トリガー** - データ検証のためのBefore/Afterトリガー
5. **コレクション** - VARRAY実装と操作
6. **動的SQL** - 実行時SQL構築と実行
7. **制御構造** - ループ、条件文、ネストブロック

### 使用パターン
- ほとんどのスクリプトには使用例とデモンストレーションが含まれています
- エラーハンドリングはプロシージャ全体で一貫して実装されています
- 出力フォーマットには表示用に`DBMS_OUTPUT.PUT_LINE`を使用
- 適切な場所での明示的コミットによるトランザクション管理

## リポジトリ構造
```
DevinTest/
├── README.md                                    # リポジトリドキュメント
├── dcos/                                       # ドキュメントと分析フォルダ
│   └── feature_list.md                        # この機能一覧ドキュメント
├── *.sql                                      # PL/SQLサンプルファイル
└── [Various PL/SQL procedures and functions]  # 個別実装ファイル
```

---
*生成日: 2025年8月12日*  
*リポジトリ: hh4aws-creator/DevinTest*  
*mainブランチのすべてのソースコードとドキュメントを含む分析*
