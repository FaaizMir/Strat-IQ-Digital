param(
  [Parameter(Mandatory=$true)][string]$ListFile,
  [Parameter(Mandatory=$true)][string]$OutDir
)

New-Item -ItemType Directory -Force -Path $OutDir | Out-Null
$lines = Get-Content $ListFile | Where-Object { $_.Trim() -ne "" }
$log = @()

foreach ($url in $lines) {
  try {
    $uri = [System.Uri]$url
    $name = [System.IO.Path]::GetFileName($uri.LocalPath)
    $name = [System.Uri]::UnescapeDataString($name)
    $name = $name -replace '[ %]', '-'
    $dest = Join-Path $OutDir $name
    if (Test-Path $dest) {
      $log += "SKIP (exists): $name"
      continue
    }
    Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing -TimeoutSec 30
    $size = (Get-Item $dest).Length
    $log += "OK: $name ($size bytes) <- $url"
  } catch {
    $log += "FAIL: $url -- $($_.Exception.Message)"
  }
}

$log | ForEach-Object { Write-Output $_ }
