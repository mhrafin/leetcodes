# count = {
#     "1": 1,
#     "2": 3
# }

# n = 1

# print(str(n) in count)

# print(count[str(n)] + 10)


class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        count = {}
        for n in nums:
            n = str(n)
            if n in count:
                count[n] = count[n] + 1
            else:
                count[n] = 1
            if count[n] > 1:
                return True
            else:
                continue
        return False