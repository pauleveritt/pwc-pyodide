from pwc_pyodide.counter import Counter


def test_initial():
    counter = Counter()
    assert counter.count == 0


def test_increment():
    counter = Counter()
    counter.increment()
    assert counter.count == 1
