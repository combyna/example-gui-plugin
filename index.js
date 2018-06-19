import myGenericWidgetComponentElementFactory from './js/src/Component/myGenericWidgetComponentElementFactory';

const MY_LIB = 'example_gui';

export default (reactElementFactoryRepository, triggerMappingRepository) => {
    reactElementFactoryRepository.addFactory(MY_LIB, 'my_generic', myGenericWidgetComponentElementFactory);
};
