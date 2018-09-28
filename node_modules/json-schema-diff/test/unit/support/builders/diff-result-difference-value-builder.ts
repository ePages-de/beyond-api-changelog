import * as _ from 'lodash';
import {DiffResultDifferenceValue, Path} from '../../../../lib/api-types';

export class DiffResultDifferenceValueBuilder {
    public static create(): DiffResultDifferenceValueBuilder {
        return new DiffResultDifferenceValueBuilder(['default', 'path'], 'default-value');
    }

    private constructor(private readonly path: Path, private readonly value: any) {}

    public build(): DiffResultDifferenceValue {
        return {
            path: [...this.path],
            value: _.cloneDeep(this.value)
        };
    }

    public withPath(newLocation: Path): DiffResultDifferenceValueBuilder {
        return new DiffResultDifferenceValueBuilder([...newLocation], this.value);
    }

    public withValue(newValue: any): DiffResultDifferenceValueBuilder {
        const copyOfNewValue = _.cloneDeep(newValue);
        return new DiffResultDifferenceValueBuilder(this.path, copyOfNewValue);
    }
}

export const diffResultDifferenceValueBuilder = DiffResultDifferenceValueBuilder.create();
