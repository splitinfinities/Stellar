export const isTextArea = function (type) {
	return (type === "textarea")
}

export const isFileUpload = function (type) {
	return (type === "file")
}

export const isSearch = function (type) {
  return (type === "search")
}

export const hasIncrements = function (type) {
  return (type === "number" || isDatePicker(type))
}

export const shouldBeAnInput = function (type) {
  return !(isTextArea(type) || isFileUpload(type) || isDatePicker(type))
}

export const isColorPicker = function (type) {
  return (type === "color")
}

export const isDatePicker = function (type) {
  return (["date", "month"].includes(type))
}

export const hasValue = function (value) {
  return (value && value !== "" && value.length >= 1)
}

export const formatBytes = function(a,b=2){if(0==a)return"0 Bytes";var c=1e3,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));return parseFloat((a/Math.pow(c,f)).toFixed(b))+" "+e[f]}


export const forEach = function(arr, cb) {
	let length = arr.length;
	for (var index = 0; index < length; index++) {
		let element = arr[index];
		cb(element, index)
	}
}
