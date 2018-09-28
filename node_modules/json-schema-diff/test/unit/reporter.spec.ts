import {Reporter} from '../../lib/json-schema-diff/reporter';
import {WrappedLog} from '../../lib/json-schema-diff/reporter/wrapped-log';
import {
    diffResultDifferenceBuilder} from './support/builders/diff-result-difference-builder';

describe('reporter', () => {
    let reporter: Reporter;
    let mockWrappedLog: jasmine.SpyObj<WrappedLog>;

    beforeEach(() => {
        mockWrappedLog = jasmine.createSpyObj<WrappedLog>('wrappedLog', ['error', 'info']);
        reporter = new Reporter(mockWrappedLog);
    });

    it('should report a success message when diff is successful with differences', async () => {
        const difference = diffResultDifferenceBuilder
            .withTypeAddType()
            .build();

        reporter.reportSuccessWithDifferences([difference]);
        expect(mockWrappedLog.info).toHaveBeenCalledWith(jasmine.stringMatching('"type": "add.type"'));
    });

    it('should report a success message when diff is successful with differences', async () => {
        reporter.reportNoDifferencesFound();
        expect(mockWrappedLog.info).toHaveBeenCalledWith('No differences found');
    });

    it('should report errors', async () => {
        reporter.reportError(new Error('some error'));

        expect(mockWrappedLog.error).toHaveBeenCalledWith(new Error('some error'));
    });

    it('should report a failure when differences were found', async () => {
        const difference = diffResultDifferenceBuilder
            .withTypeRemoveType()
            .build();

        reporter.reportFailureWithDifferences([difference]);
        expect(mockWrappedLog.error).toHaveBeenCalledWith(jasmine.stringMatching('"type": "remove.type"'));
    });
});
