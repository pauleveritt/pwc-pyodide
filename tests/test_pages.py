from playwright.sync_api import Page


def test_index(page: Page):
    # Use `PWDEBUG=1` to run "head-ful" in Playwright test app
    url = "http://localhost:5173/index.html"
    page.goto(url)
    assert page.title() == "Pyodide Counter"

    # When the page loads, the pre#output is empty, until
    # Pyodide kicks in.
    pre = page.locator("#output")
    assert pre.text_content() == ""

    # Now wait for the pre to get some content from Pyodide
    message = "Hello Pyodide! This element was created from Python."
    output = page.wait_for_selector(f"#output:has-text('{message}')")
    assert output.text_content() == message
