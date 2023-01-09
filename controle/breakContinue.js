const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break //o break não age sobre o if, mas vai agir sobre o laço for estruturado a ele
    }
    console.log (`${x} = ${nums[x]}`)   
}

for(y in nums) {
    if (y == 5) {
        continue //diferente do breake, o continue vai apenas interromper quando o y = 5 e vai continuar logo em seguida
    }
    console.log (`${y} = ${nums[y]}`)
}