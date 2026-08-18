$root = "c:\Users\DeLL\Desktop\strat temp code"
$list = Get-Content "$root\scratch\home_urls.txt" | Where-Object { $_.Trim() -ne "" }

foreach ($url in $list) {
  try {
    $uri = [System.Uri]$url
    $name = [System.IO.Path]::GetFileName($uri.LocalPath)
    $name = [System.Uri]::UnescapeDataString($name)
    $name = $name -replace ' ', '-'

    if ($name -match '\.(mp4|webm)$') {
      $outDir = "$root\public\videos"
    } elseif ($url -match 'rscommunications\.net') {
      $outDir = "$root\public\images\uploads"
    } else {
      $outDir = "$root\public\images\webflow"
    }

    $dest = Join-Path $outDir $name
    if (Test-Path $dest) {
      Write-Output "SKIP (exists): $name"
      continue
    }
    Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing -TimeoutSec 30
    $size = (Get-Item $dest).Length
    Write-Output "OK: $name ($size bytes)"
  } catch {
    Write-Output "FAIL: $url -- $($_.Exception.Message)"
  }
}
