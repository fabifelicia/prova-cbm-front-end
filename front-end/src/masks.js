export function cpf(e) {
  e.currentTarget.maxLength = 14;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4");
  e.currentTarget.value = value;
  return e;
}

export function data(e) {
  e.currentTarget.maxLength = 10;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})?(\d{2})?(\d{4})/, "$1-$2-$3");
  e.currentTarget.value = value;
  return e;
}

export function phone(e) {
  e.currentTarget.maxLength = 14;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^?(\d{2})?(\d{5})?(\d{4})/, "($1)$2-$3");
  e.currentTarget.value = value;
  return e;
}

export function cpfOculto(e) {
  e.currentTarget.maxLength = 14;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.***.***-$4");
  e.currentTarget.value = value;
  return e;
}
