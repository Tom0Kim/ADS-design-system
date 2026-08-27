import React, { type ReactNode } from 'react';
import type { PanelSystemState } from './types';
/**
 * Context for accessing the panel manager functions.
 * Provides a stable reference that doesn't cause re-renders on state changes.
 * @internal
 */
export declare const ManagerContext: React.Context<PanelManager | null>;
/**
 * Context for accessing the panel system state.
 * Consumers of this context will re-render when state changes.
 * @internal
 */
export declare const StateContext: React.Context<PanelSystemState | null>;
/**
 * Panel manager providing action methods for panel operations
 * @internal
 */
export type PanelManager = {
    openPanel: (instanceId: string, entryPoint: any, params?: any) => void;
    closePanel: (instanceId: string) => void;
};
/**
 * Props for the PanelProvider component
 */
export type PanelProviderProps = {
    /**
     * Child components that will have access to the panel manager
     */
    children: ReactNode;
    /**
     * Optional initial state for the panel system
     */
    initialState?: Partial<PanelSystemState>;
};
/**
 * PanelProvider component that wraps your application to provide panel management context.
 *
 * Uses split contexts for optimal performance:
 * - ManagerContext: Provides stable panel manager functions (never re-renders consumers)
 * - StateContext: Provides panel state (re-renders consumers when state changes)
 *
 * This design prevents unnecessary re-renders of components that only use the manager.
 *
 * @example
 * ```tsx
 * import { PanelProvider, usePanelManager } from '@atlaskit/panel-system';
 *
 * export function App() {
 *   return (
 *     <PanelProvider>
 *       <YourComponent />
 *     </PanelProvider>
 *   );
 * }
 *
 * function YourComponent() {
 *   const { state, manager } = usePanelManager();
 *   return (
 *     <button onClick={() => manager.openPanel('id-1', entryPoint)}>
 *       Open Panel
 *     </button>
 *   );
 * }
 * ```
 */
export declare function PanelProvider({ children, initialState }: PanelProviderProps): React.JSX.Element;
/**
 * Hook to access the panel manager actions from context.
 * Must be called within a PanelProvider.
 *
 * The manager object is stable and memoized, so using this hook alone
 * won't cause re-renders when state changes.
 *
 * @throws {Error} If called outside of a PanelProvider
 * @internal
 */
export declare function usePanelActionsInternal(): PanelManager;
/**
 * Hook to access the panel system state from context.
 * Must be called within a PanelProvider.
 *
 * Consumers of this hook will re-render when state changes.
 *
 * @throws {Error} If called outside of a PanelProvider
 * @internal
 */
export declare function usePanelStateInternal(): PanelSystemState;
