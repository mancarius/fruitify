/**
 * A wrapper around the browser's local or session storage, providing a simple key-value store with support for various value types.
 * @template S - The type of the keys in the map.
 * @template T - The type of the values in the map.
 */
export class LocalMap<S = string, T = any> {

  private _storage: Storage;

  /**
   * Creates a new `LocalMap` instance.
   * @param {("local"|"session")} [storageType="local"] - The type of storage to use: "local" for localStorage or "session" for sessionStorage.
   */
  constructor(storageType: "local" | "session" = "local") {

    /**
     * The underlying storage object used by the `LocalMap`.
     * @type {Storage}
     * @private
     */
    this._storage = storageType === "local" ? window.localStorage : window.sessionStorage;
  }

  /**
   * Retrieves the value associated with the given key from the storage.
   * @param {S} key - The key of the item to retrieve.
   * @returns {T|null} - The value associated with the key, or `null` if the key was not found.
   */
  get(key: S): T | null {
    const value = this._storage.getItem(String(key));
    if (value !== null) {
      /**
        * Parses the stored value and returns it as the appropriate type.
        * @type {T}
        */
      let parsedValue: T;

      const isNumber = !isNaN(Number(value));
      if (isNumber) {
        // The stored value is a number.
        parsedValue = Number(value) as unknown as T;
      } else {
        // The stored value is a string, boolean, or object.
        try {
          parsedValue = JSON.parse(value);
        } catch (err) {
          // The stored value is a string.
          parsedValue = value as unknown as T;
        }
      }

      return parsedValue;
    }

    // The key was not found.
    return null;
  }

  /**
   * Stores a key-value pair in the storage.
   * @param {S} key - The key of the item to store.
   * @param {T} value - The value to store.
   */
  set(key: S, value: T): void {
    const type = typeof value;

    try {
      switch (type) {
        case "object":
          // The value is an object or an array.
          const isArray = Array.isArray(value);
          if (isArray) {
            // The value is an array.
            this._storage.setItem(String(key), JSON.stringify(value));
          } else {
            // The value is an object.
            this._storage.setItem(String(key), JSON.stringify({ ...value }));
          }
          break;

        case "boolean":
          // The value is a boolean.
          this._storage.setItem(String(key), JSON.stringify(value));
          break;

        default:
          // The value is a string or a number.
          this._storage.setItem(String(key), String(value));
      }
    } catch (error: any) {
      console.warn("[LocalMap] Error while storing value. " + error?.message);
    }
  }

  /**
   * Removes the item with the given key from the storage, if it exists.
   * @param {S} key - The key of the item to remove.
   */
  removeOne(key: S): void {
    this._storage.removeItem(String(key));
  }

  /**
   * Removes multiple items from the storage, given their keys.
   * @param {S[]} keys - An array of keys of the items to remove.
   */
  removeMany(keys: S[]): void {
    keys.forEach((key) => this._storage.removeItem(String(key)));
  }

  /**
   * Removes all items from the storage.
   */
  clear(): void {
    this._storage.clear();
  }
}