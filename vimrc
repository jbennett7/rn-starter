let s:env = "!ssh ubuntu@ubuntu -C 'cd rn-starter;"
let mapleader="-"
set number
set expandtab
set shiftwidth=4
inoremap jk <esc>
if has("gui_running")
    inoremap <esc> <nop>
endif

nnoremap <leader>ga :execute '!git add ' . expand("%")<cr>
nnoremap <leader>gs :echo system('git status')<cr>

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
  execute "!git commit -m" . l:msg
  execute "!git push origin main"
  call Update()
endfunction
command! -nargs=* -complete=command UpdateAll call UpdateAll(<q-args>)

function Start_NR()
  let l:cmd = "npm start"
  !ssh -N -f -L localhost:19002:localhost:19002 ubuntu@ubuntu
  !firefox http://localhost:19002 &
endfunction
command! -nargs=0 -complete=command Startnr call Start_NR()
