/* 
47. Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados.
*/
function transformObject(obj, transformFn) {
	const result = {};
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			result[key] = transformFn(obj[key], key);
		}
	}
	return result;
}

const originalObject = {
	a: 1,
	b: 2,
	c: 3,
};

const transformedObject = transformObject(originalObject, (value, key) => {
	if (key === "a") {
		return value * 2;
	} else if (key === "b") {
		return value + 10;
	} else {
		return value - 1;
	}
});

console.log(transformedObject);
