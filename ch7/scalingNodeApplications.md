> ## Scaling Node Applications

### Child processes - "child_process"
- node applications don't handle cpu tasks well.
- spending too much cpu time on any one task in a noe app will block the event loop. This will prevent other work from being done. 
- a cpu intensive task can be passed on to a child process and the cpu can continue processing events.
- Four way to launch a child process:
    * spawn(command, [args], [options])
    * exec(command, [options], callback)
    * execFile(file, [args], [options], callback)
