let s:env = "!ssh ubuntu@tomcat -C 'cd rn-starter;"

function Update()
  let l:cmd = "git pull origin main"
  execute s:env . l:cmd . "'"
endfunction
command! -nargs=0 -complete=command Update call Update()

function UpdateAll(msg)
  if empty(a:msg)
    let l:msg = "changes"
  else
    let l:msg = a:msg
  endif
  execute "!git add " . expand("%")
  call GitCommit(l:msg)
  execute "!git push origin main"
  call Update()
endfunction
command! -nargs=* -complete=command UpdateAll call UpdateAll(<q-args>)

function Start_NR()
  let l:cmd = "npm start"
  !ssh -N -f -L localhost:19002:localhost:19002 ubuntu@tomcat
  !firefox http://localhost:19002 &
endfunction
command! -nargs=0 -complete=command Startnr call Start_NR()
