@echo off
cd ..
(
  for /f "delims=" %%i in ('git ls-files') do (
    echo ---
    echo %%i
    echo.
    git blame "%%i" | findstr /R "Sedancer\s*2023-05"
  )
) > changes_project_name_2023-05.txt