s = ["a", "b", "c", "a"]
ans = ''
anscnt = 0

# // set operation provide opportunity to get all uniq literals
for now in set(s):
    nowcnt = 0
    for j in range(len(s)):
        if now == s[j]:
            nowcnt += 1
    if nowcnt > anscnt:
        ans = nowcnt
        anscnt = nowcnt

print(ans)
