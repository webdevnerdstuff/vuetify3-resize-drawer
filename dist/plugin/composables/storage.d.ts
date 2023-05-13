import type { SetStorage } from '../../types';
export declare function useGetStorage(storageType: string, storageName: string): string | null;
export declare function useSetStorage({ action, resizedWidth, storageType, storageName, saveWidth, rail }: SetStorage): void;
