from dataclasses import dataclass


@dataclass
class Counter:
    count: int = 0

    def increment(self):
        self.count += 1


def get_counter():
    return Counter()
