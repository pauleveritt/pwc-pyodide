const pyodide = await loadPyodide();
await pyodide.runPythonAsync(`
    from pyodide.http import pyfetch
    response = await pyfetch("hello.py")
    with open("hello.py", "wb") as f:
        f.write(await response.bytes())
`);
const hello = pyodide.pyimport("hello");
const message = hello.get_message();
