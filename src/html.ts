import { makeDecorator, MakeDecoratorResult, StoryContext, StoryGetter, WrapperSettings } from '@storybook/addons';
import parameters from './parameters';

function pseudoStateFn(getStory: StoryGetter,
                       context: StoryContext,
                       settings: WrapperSettings): MakeDecoratorResult {

  console.log(getStory, context, settings);
  const element = getStory(context);


  // TODO do something

  return element;
}

export const withPseudo  = makeDecorator({
  ...parameters,
  // wrapper: (getStory: StoryGetter, context: StoryContext, settings: WrapperSettings) => pseudoStateFn(getStory, context, settings)
  wrapper: (getStory, context, {parameters}) => {
    return getStory(context);
  }
});

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}


console.log('load html addon');
