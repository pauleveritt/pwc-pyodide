from playwright.sync_api import Page


def test_index(page: Page):
    # Use `PWDEBUG=1` to run "head-ful" in Playwright test app
    url = "http://localhost:5173/index.html"
    page.goto(url)
    assert page.title() == "Pyodide Counter"

    # When the page loads, the counter is empty, until Pyodide kicks in.
    counter = page.locator("#counter")
    assert counter.text_content() == ""

    # Now wait for the pre to get some content from Pyodide
    message = "Current Count: 0"
    page.wait_for_selector(f"#counter:has-text('{message}')")
    assert counter.text_content() == message

    # Click it, test the result
    counter.click()
    assert counter.text_content() == "Current Count: 1"
