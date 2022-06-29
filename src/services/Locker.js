export function getLocker() {
  return fetch("http://192.168.0.231:3000/Locker/").then((response) =>
    response.json()
  );
}

export function OpenDoor() {
  return fetch("http://192.168.0.231:3000/OpenDoor/").then((response) =>
    response.text()
  );
}