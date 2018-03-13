import MyGenericWidgetComponent from './js/src/Component/MyGenericWidgetComponent';

const MY_LIB = 'example_gui';

export default (componentRepository) => {
    componentRepository.addComponent(MY_LIB, 'my_generic', MyGenericWidgetComponent);
};
