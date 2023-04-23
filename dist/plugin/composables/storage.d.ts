import type { SetStorage } from '@/types/types';
export declare function useGetStorage(storageType: string, storageName: string): string;
export declare function useSetStorage({ action, resizedWidth, storageType, storageName, saveWidth, rail }: SetStorage): void;
