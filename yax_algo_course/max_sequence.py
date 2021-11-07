seq = list(map(int, input().split()))
seqmax = 0

for i in range(len(seq)):
    if seq[i] > seqmax:
        seqmax = seq[i]

print(seqmax)


seq = list(map(int, input().split()))
if(len(seq) == 0):
    print("No sequences")
else:
    seqmax = seq[0]
    for i in range(1, len(seq)):
        if seq[i] > seqmax:
            seqmax = seq[i]
    print(seqmax)
