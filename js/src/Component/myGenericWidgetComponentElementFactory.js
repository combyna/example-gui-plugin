import { createElementFactory } from 'combyna-gui-plugin/react';
import MyGenericWidgetComponent from './MyGenericWidgetComponent';

const mapTriggersToProps = (mapTrigger, importTriggerMappings, dispatchEvent) => {
    // TODO: Decide whether these should be auto-imported based on the YAML config
    //       for a hypothetical widget definition `groups` option
    importTriggerMappings('native_dom');

    mapTrigger('example_gui', 'close_me', {
        onClick: () => {
            dispatchEvent('example_gui', 'close_me');
        }
    });

    mapTrigger('example_gui', 'collapse_me', {
        onMyCustomPropCalledCollapse: () => {
            dispatchEvent('example_gui', 'collapse_me');
        }
    });
};

export default function (builtinTriggerMappingRepository) {
    return createElementFactory({
        Component: MyGenericWidgetComponent,
        builtinTriggerMappingRepository,
        mapTriggersToProps
    });
}
