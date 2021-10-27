import { SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';

export const reporter = () => {
  jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
      displayStacktrace: StacktraceOption.PRETTY,
    },
  }));
};
