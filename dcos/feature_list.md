# PL/SQL Examples Repository - Feature List

## Overview
This document provides a comprehensive list of all features and functionality available in the DevinTest PL/SQL examples repository.

## Feature List

| Physical Name | Logical Name (English) | Overview (English) | Overview (Japanese) |
|---------------|------------------------|-------------------|-------------------|
| `get_employees_by_dept` | Employee Department Query Function | Returns comma-separated list of employee first names for a given department ID | 指定された部署IDの従業員の名前をカンマ区切りで返す関数 |
| `update_salary` | Basic Salary Update Procedure | Updates employee salary with basic validation and exception handling | 基本的な検証と例外処理を含む従業員給与更新プロシージャ |
| `update_salary2` | Advanced Salary Update Procedure | Enhanced salary update with salary increase validation and history logging | 給与増加検証と履歴ログ機能を持つ拡張給与更新プロシージャ |
| `get_top_employees` | Top Salary Employees Function | Returns names of employees with highest salary in a given job category | 指定された職種カテゴリで最高給与の従業員名を返す関数 |
| `BONUS_CALCULATION.SQL` | Employee Bonus Calculation Script | Calculates employee bonuses based on job history and commission percentage | 職歴と手数料率に基づいて従業員ボーナスを計算するスクリプト |
| `trg_commission_check` | Commission Validation Trigger | Prevents employees in Toronto from having commission percentage | トロントの従業員が手数料率を持つことを防ぐトリガー |
| `trg_salary_check` | Salary History Trigger | Prevents salary decreases and logs salary changes to history table | 給与減額を防ぎ、給与変更を履歴テーブルに記録するトリガー |
| `delete_rows` | Dynamic Row Deletion Function | Generic function to delete rows from any table using dynamic SQL | 動的SQLを使用して任意のテーブルから行を削除する汎用関数 |
| `marks_array` | Student Marks VARRAY Type | Custom VARRAY type for storing up to 10 student marks | 最大10個の学生成績を格納するカスタムVARRAY型 |
| `GetMarks` | Marks Retrieval Function | Retrieves specific mark from student marks array by position | 位置指定で学生成績配列から特定の成績を取得する関数 |
| `AddMarks` | Marks Addition Procedure | Adds new mark to existing student marks array | 既存の学生成績配列に新しい成績を追加するプロシージャ |
| `salary_stats.sql` | Salary Statistics Analysis | Analyzes employee salary distribution compared to average salary | 平均給与と比較した従業員給与分布を分析するスクリプト |
| `get_highest_paid_employees` | Department Top Earners Function | Returns highest paid employees in a specific department | 特定部署の最高給与従業員を返す関数 |
| `employees_by_year.sql` | Employee Hire Year Analysis | Displays employees grouped by their hire year (2000-2010) | 雇用年別（2000-2010年）に従業員をグループ化して表示するスクリプト |
| `dept_highest_salaried_emp.sql` | Department Salary Leaders Script | Finds highest salaried employee in each department with exception handling | 例外処理を含む各部署の最高給与従業員を検索するスクリプト |
| `missing_employee_ids_with_exceptions.sql` | Missing Employee ID Finder | Identifies missing employee IDs using exception handling and nested blocks | 例外処理とネストブロックを使用して欠落従業員IDを特定するスクリプト |
| `ex_handling_demo1.sql` | Exception Handling Demo | Demonstrates error handling for foreign key and null value constraints | 外部キーとnull値制約のエラーハンドリングを実演するスクリプト |
| `month__employees__recent_year.sql` | Recent Year Monthly Employee Analysis | Analyzes employee data by month for recent years | 最近の年の月別従業員データを分析するスクリプト |
| `display_dept_costly_experienced_emp.sql` | Department Cost Analysis | Displays department information with costly and experienced employees | 高コストで経験豊富な従業員を含む部署情報を表示するスクリプト |
| `job_summary_2.sql` | Comprehensive Job Summary | Provides detailed job statistics including salary, experience, and top performers | 給与、経験、トップパフォーマーを含む詳細な職種統計を提供するスクリプト |
| `missing_employeeids.sql` | Employee ID Gap Analysis | Identifies gaps in employee ID sequences | 従業員ID順序のギャップを特定するスクリプト |
| `count_employees_by_month.sql` | Monthly Employee Count | Counts employees hired by month | 月別雇用従業員数をカウントするスクリプト |
| `dept_details_lessthan_5_emp.sql` | Small Department Analysis | Analyzes departments with fewer than 5 employees | 5人未満の従業員を持つ部署を分析するスクリプト |
| `employees_old_new_salaries.sql` | Salary Comparison Analysis | Compares old and new salary values for employees | 従業員の旧給与と新給与を比較するスクリプト |
| `insert_entertainment_dept.sql` | Entertainment Department Setup | Inserts new entertainment department data | 新しいエンターテイメント部署データを挿入するスクリプト |
| `hike_salary_for_150.sql` | Specific Employee Salary Increase | Increases salary for employee ID 150 | 従業員ID 150の給与を増加させるスクリプト |
| `displays_dept_details.sql` | Department Details Display | Shows comprehensive department information | 包括的な部署情報を表示するスクリプト |
| `jobs_summary.sql` | Job Summary Report | Generates summary report of all job categories | 全職種カテゴリのサマリーレポートを生成するスクリプト |
| `interchange_salary.sql` | Salary Interchange Operation | Performs salary interchange operations between employees | 従業員間の給与交換操作を実行するスクリプト |
| `current_job_start_date.sql` | Current Job Start Date Query | Retrieves current job start dates for employees | 従業員の現在の職務開始日を取得するスクリプト |
| `dept_hod_city_noemployees.sql` | Department Head and Location Analysis | Analyzes department heads, cities, and employee counts | 部署長、都市、従業員数を分析するスクリプト |
| `dept_highest_salaried_emp3.sql` | Alternative Department Salary Analysis | Alternative approach to finding highest salaried employees by department | 部署別最高給与従業員を見つける代替アプローチ |
| `employee_info.sql` | Employee Information Query | Comprehensive employee information retrieval | 包括的な従業員情報取得スクリプト |
| `current_job_start_date_for_all_employees.sql` | All Employees Job Start Dates | Retrieves job start dates for all employees in the system | システム内全従業員の職務開始日を取得するスクリプト |
| `change_department_manager.sql` | Department Manager Change | Changes department manager assignments | 部署マネージャーの割り当てを変更するスクリプト |
| `deptname_highest_exp_employee.sql` | Most Experienced Employee by Department | Finds most experienced employee in each department | 各部署で最も経験豊富な従業員を検索するスクリプト |

## Categories

### Employee Management Functions
- Employee queries by department, job, and various criteria
- Employee information retrieval and analysis
- Employee hiring date and experience analysis

### Salary Management
- Salary update procedures with validation
- Salary statistics and comparison analysis
- Bonus calculation based on multiple criteria
- Salary history tracking and auditing

### Database Triggers
- Commission validation for location-based rules
- Salary change validation and logging
- Data integrity enforcement

### Exception Handling
- Comprehensive error handling demonstrations
- Missing data identification
- Constraint violation handling

### Advanced PL/SQL Features
- VARRAY implementation for student marks
- Dynamic SQL execution
- Cursor-based data processing
- Nested block structures

### Department Management
- Department analysis and reporting
- Manager assignment and changes
- Department-based employee statistics

## Technical Implementation Details

### Database Schema
The examples assume a standard HR schema with the following main tables:
- `employees` - Employee master data
- `departments` - Department information
- `jobs` - Job categories and titles
- `job_history` - Employee job change history
- `locations` - Geographic location data
- `salary_history` - Salary change audit trail
- `students` - Student information (for VARRAY demo)

### Key PL/SQL Concepts Demonstrated
1. **Functions and Procedures** - Various implementations for data retrieval and manipulation
2. **Cursors** - Both explicit and implicit cursor usage
3. **Exception Handling** - User-defined and system exceptions
4. **Triggers** - Before/after triggers for data validation
5. **Collections** - VARRAY implementation and manipulation
6. **Dynamic SQL** - Runtime SQL construction and execution
7. **Control Structures** - Loops, conditional statements, and nested blocks

### Usage Patterns
- Most scripts include example calls and usage demonstrations
- Error handling is implemented consistently across procedures
- Output formatting uses `DBMS_OUTPUT.PUT_LINE` for display
- Transaction management with explicit commits where appropriate

## Repository Structure
```
DevinTest/
├── README.md                                    # Repository documentation
├── dcos/                                       # Documentation and analysis folder
│   └── feature_list.md                        # This feature list document
├── *.sql                                      # PL/SQL example files
└── [Various PL/SQL procedures and functions]  # Individual implementation files
```

---
*Generated on: August 12, 2025*  
*Repository: hh4aws-creator/DevinTest*  
*Analysis includes all source code and documentation from the main branch*
