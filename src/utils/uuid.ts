import * as Crypto from "expo-crypto";

export function uuidv4() {
	return Crypto.randomUUID();
}
