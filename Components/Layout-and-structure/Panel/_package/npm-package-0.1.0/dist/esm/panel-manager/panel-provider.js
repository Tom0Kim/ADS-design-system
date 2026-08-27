import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { createContext, useContext, useMemo, useReducer } from 'react';
/**
 * Context for accessing the panel manager functions.
 * Provides a stable reference that doesn't cause re-renders on state changes.
 * @internal
 */
export var ManagerContext = /*#__PURE__*/createContext(null);

/**
 * Context for accessing the panel system state.
 * Consumers of this context will re-render when state changes.
 * @internal
 */
export var StateContext = /*#__PURE__*/createContext(null);

/**
 * Panel manager providing action methods for panel operations
 * @internal
 */

/**
 * Props for the PanelProvider component
 */

/**
 * Pure reducer function handling panel state transitions.
 * Manages PANEL_OPEN and PANEL_CLOSE actions.
 *
 * Note: Panel resizing (width) is handled locally in PanelContainer as UI state,
 * not global application state.
 *
 * TODO: For SSR support, panel widths should be persisted to localStorage
 * so that user preferences are restored across page reloads.
 */
function panelReducer(state, action) {
  switch (action.type) {
    case 'PANEL_OPEN':
      {
        var _action$payload = action.payload,
          instanceId = _action$payload.instanceId,
          entryPoint = _action$payload.entryPoint,
          params = _action$payload.params;
        var newPanel = {
          instanceId: instanceId,
          entryPoint: entryPoint,
          params: params || {}
        };
        return _objectSpread(_objectSpread({}, state), {}, {
          activePanels: [].concat(_toConsumableArray(state.activePanels), [newPanel])
        });
      }
    case 'PANEL_CLOSE':
      {
        var _instanceId = action.payload.instanceId;
        return _objectSpread(_objectSpread({}, state), {}, {
          activePanels: state.activePanels.filter(function (p) {
            return p.instanceId !== _instanceId;
          })
        });
      }
    default:
      return state;
  }
}

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
export function PanelProvider(_ref) {
  var children = _ref.children,
    initialState = _ref.initialState;
  var _useReducer = useReducer(panelReducer, _objectSpread({
      activePanels: []
    }, initialState)),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];

  // Create stable manager object with memoization
  // This object reference never changes, so ManagerContext consumers never re-render
  var manager = useMemo(function () {
    return {
      openPanel: function openPanel(instanceId, entryPoint, params) {
        dispatch({
          type: 'PANEL_OPEN',
          payload: {
            instanceId: instanceId,
            entryPoint: entryPoint,
            params: params
          }
        });
      },
      closePanel: function closePanel(instanceId) {
        dispatch({
          type: 'PANEL_CLOSE',
          payload: {
            instanceId: instanceId
          }
        });
      }
    };
  }, []);
  return /*#__PURE__*/React.createElement(ManagerContext.Provider, {
    value: manager
  }, /*#__PURE__*/React.createElement(StateContext.Provider, {
    value: state
  }, children));
}

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
export function usePanelActionsInternal() {
  var manager = useContext(ManagerContext);
  if (!manager) {
    throw new Error('usePanelActionsInternal must be used within a <PanelProvider>. ' + 'Wrap your app with: <PanelProvider><App /></PanelProvider>');
  }
  return manager;
}

/**
 * Hook to access the panel system state from context.
 * Must be called within a PanelProvider.
 *
 * Consumers of this hook will re-render when state changes.
 *
 * @throws {Error} If called outside of a PanelProvider
 * @internal
 */
export function usePanelStateInternal() {
  var state = useContext(StateContext);
  if (!state) {
    throw new Error('usePanelStateInternal must be used within a <PanelProvider>. ' + 'Wrap your app with: <PanelProvider><App /></PanelProvider>');
  }
  return state;
}