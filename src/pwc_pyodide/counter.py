from dataclasses import dataclass


@dataclass
class Counter:
    current_count: int = 0

    def increment(self):
        self.current_count += 1
