import * as _ from 'lodash';
import {DiffResultDifference, DiffResultDifferenceType} from '../../../../lib/api-types';
import {
    diffResultDifferenceValueBuilder,
    DiffResultDifferenceValueBuilder
} from './diff-result-difference-value-builder';

interface DiffResultDifferenceBuilderState {
    type: DiffResultDifferenceType;
    sourceValues: DiffResultDifferenceValueBuilder[];
    destinationValues: DiffResultDifferenceValueBuilder[];
    addedByDestinationSchema: boolean;
    removedByDestinationSchema: boolean;
    value: any;
}

export class DiffResultDifferenceBuilder {
    public static create(): DiffResultDifferenceBuilder {
        return new DiffResultDifferenceBuilder({
            addedByDestinationSchema: true,
            destinationValues: [
                diffResultDifferenceValueBuilder
                    .withPath(['default', 'destination', 'location'])
                    .withValue('default-destination-value')
            ],
            removedByDestinationSchema: false,
            sourceValues: [
                diffResultDifferenceValueBuilder
                    .withPath(['default', 'source', 'location'])
                    .withValue('default-source-value')
            ],
            type: 'add.type',
            value: 'default-value'
        });
    }

    private constructor(private readonly state: DiffResultDifferenceBuilderState) {}

    public build(): DiffResultDifference {
        return {
            addedByDestinationSchema: this.state.addedByDestinationSchema,
            destinationValues: this.state.destinationValues.map((builder) => builder.build()),
            removedByDestinationSchema: this.state.removedByDestinationSchema,
            sourceValues: this.state.sourceValues.map((builder) => builder.build()),
            type: this.state.type,
            value: _.cloneDeep(this.state.value)
        };
    }

    public withTypeAddType(): DiffResultDifferenceBuilder {
        return new DiffResultDifferenceBuilder({
            addedByDestinationSchema: true,
            destinationValues: this.state.destinationValues,
            removedByDestinationSchema: false,
            sourceValues: this.state.sourceValues,
            type: 'add.type',
            value: this.state.value
        });
    }

    public withTypeRemoveType(): DiffResultDifferenceBuilder {
        return new DiffResultDifferenceBuilder({
            addedByDestinationSchema: false,
            destinationValues: this.state.destinationValues,
            removedByDestinationSchema: true,
            sourceValues: this.state.sourceValues,
            type: 'remove.type',
            value: this.state.value
        });
    }

    public withSourceValues(newSourceValues: DiffResultDifferenceValueBuilder[]): DiffResultDifferenceBuilder {
        const copyOfNewSourceValues = Array.from(newSourceValues);
        return new DiffResultDifferenceBuilder({
            addedByDestinationSchema: this.state.addedByDestinationSchema,
            destinationValues: this.state.destinationValues,
            removedByDestinationSchema: this.state.removedByDestinationSchema,
            sourceValues: copyOfNewSourceValues,
            type: this.state.type,
            value: this.state.value
        });
    }

    public withSourceValue(newSourceValue: DiffResultDifferenceValueBuilder): DiffResultDifferenceBuilder {
        return new DiffResultDifferenceBuilder({
            addedByDestinationSchema: this.state.addedByDestinationSchema,
            destinationValues: this.state.destinationValues,
            removedByDestinationSchema: this.state.removedByDestinationSchema,
            sourceValues: [newSourceValue],
            type: this.state.type,
            value: this.state.value
        });
    }

    public withDestinationValues(
        newDestinationValues: DiffResultDifferenceValueBuilder[]
    ): DiffResultDifferenceBuilder {
        const copyOfNewDestinationValues = Array.from(newDestinationValues);
        return new DiffResultDifferenceBuilder({
            addedByDestinationSchema: this.state.addedByDestinationSchema,
            destinationValues: copyOfNewDestinationValues,
            removedByDestinationSchema: this.state.removedByDestinationSchema,
            sourceValues: this.state.sourceValues,
            type: this.state.type,
            value: this.state.value
        });
    }

    public withDestinationValue(newDestinationValue: DiffResultDifferenceValueBuilder): DiffResultDifferenceBuilder {
        return new DiffResultDifferenceBuilder({
            addedByDestinationSchema: this.state.addedByDestinationSchema,
            destinationValues: [newDestinationValue],
            removedByDestinationSchema: this.state.removedByDestinationSchema,
            sourceValues: this.state.sourceValues,
            type: this.state.type,
            value: this.state.value
        });
    }

    public withValue(newValue: any): DiffResultDifferenceBuilder {
        const copyOfNewValue = _.cloneDeep(newValue);
        return new DiffResultDifferenceBuilder({
            addedByDestinationSchema: this.state.addedByDestinationSchema,
            destinationValues: this.state.destinationValues,
            removedByDestinationSchema: this.state.removedByDestinationSchema,
            sourceValues: this.state.sourceValues,
            type: this.state.type,
            value: copyOfNewValue
        });
    }
}

export const diffResultDifferenceBuilder = DiffResultDifferenceBuilder.create();
