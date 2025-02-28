// スレッド構文とクローン

const original = {
  name: "Nakai",
  age: 50,
  type: true,
  address: {
    Zip: "634-0033",
    city: "Nara",
    type: false,
  },
};

// スプレッド構文はshallow copy)
let copy = { ...original };

// address オブジェクトは original と copy で共有されるため、次のように変更すると original.address も変更されてしまいます。
copy.name = "Yamada"; // 参照元は変更されない
copy.address.Zip = "555001"; // 参照元も変更される。
copy.address.city = "Osaka"; // 参照元も変更される。

// console.log("original:", original);
// console.log("copy:", copy);

console.log("-- 以下、shallow copy の結果 -- ");
console.log(`original: ${JSON.stringify(original, null, 2)}`); // 2はインデント
console.log("------------");
console.log(`shallow copy: ${JSON.stringify(copy, null, 4)}`);

// 完全に独立したオブジェクトを作りたい場合は、structuredClone() を使うか、JSON.parse(JSON.stringify(obj)) を利用するとよいでしょう。

// deep copy
copy = structuredClone(original);
copy.address.Zip = "555-1122"; // 参照元は変更されない
copy.name = "Tanaka"; // 参照元は変更されない
copy.city = "Okinawa"; // 参照元は変更されない
copy.address.type = true; // 参照元は変更されない

console.log("-- 以下、deep copy の結果 -- ");
console.log(`original: ${JSON.stringify(original, null, 2)}`); // 2はインデント
console.log("------------");
console.log(`deep copy: ${JSON.stringify(copy, null, 4)}`);
