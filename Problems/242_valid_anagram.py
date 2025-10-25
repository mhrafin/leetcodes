# s = "anagram"
# t = "nagaram"

# a = ""
# for x in s[::-1]:
#     a = a + x

# print(a)
# print(t)
# if a == t:
#     print(1)
# else:
#     print(2)

# ************************** O(NlogN) ****************************

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        # This
        sorted_s = sorted(s)
        sorted_t = sorted(t)
        for x in range(len(sorted_s)):
            if sorted_s[x] == sorted_t[x]:
                continue
            else:
                return False
        return True
            
        # Or

        # return sorted(s) == sorted(t)


