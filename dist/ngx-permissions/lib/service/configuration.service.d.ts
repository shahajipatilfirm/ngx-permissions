import { InjectionToken, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxPermissionsConfigurationStore } from '../store/configuration.store';
import { PermissionState } from '../directive/permissions.directive';
import * as ɵngcc0 from '@angular/core';
export declare type StrategyFunction = (templateRef: TemplateRef<any>, permissions?: PermissionState) => void;
export declare type Strategy = {
    [key: string]: StrategyFunction;
};
export declare const USE_CONFIGURATION_STORE: InjectionToken<{}>;
export declare class NgxPermissionsConfigurationService {
    private isolate;
    private configurationStore;
    private strategiesSource;
    strategies$: Observable<Strategy>;
    onAuthorisedDefaultStrategy: string | undefined;
    onUnAuthorisedDefaultStrategy: string | undefined;
    constructor(isolate: boolean, configurationStore: NgxPermissionsConfigurationStore);
    setDefaultOnAuthorizedStrategy(name: string | 'remove' | 'show'): void;
    setDefaultOnUnauthorizedStrategy(name: string | 'remove' | 'show'): void;
    addPermissionStrategy(key: string, func: StrategyFunction): void;
    getStrategy(key: string): StrategyFunction;
    getAllStrategies(): Strategy;
    private getDefinedStrategy;
    private isPredefinedStrategy;
    static ngInjectableDef: ɵngcc0.ɵɵInjectableDef<NgxPermissionsConfigurationService>;
}

//# sourceMappingURL=configuration.service.d.ts.map