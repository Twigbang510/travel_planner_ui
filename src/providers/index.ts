import { StorageProvider } from "./storage.provider";

/**
 * @dev Initialize storage provider.
 * @returns {StorageProvider}
 */
export const getStorageProvider = () => new StorageProvider();