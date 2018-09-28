import * as _ from 'lodash';
import {Representation, RepresentationType} from '../../../../lib/json-schema-diff/parser/json-set/set';
import {representationValueBuilder, RepresentationValueBuilder} from './representation-value-builder';

interface RepresentationBuilderState {
    type: RepresentationType;
    sourceValues: RepresentationValueBuilder[];
    destinationValues: RepresentationValueBuilder[];
    value: any;
}

export class RepresentationBuilder {
    public static create(): RepresentationBuilder {
        return new RepresentationBuilder({
            destinationValues: [
                representationValueBuilder
                    .withPath(['default-destination-location'])
                    .withValue('default-destination-value')
            ],
            sourceValues: [
                representationValueBuilder
                    .withPath(['default-source-location'])
                    .withValue('default-source-value')
            ],
            type: 'type',
            value: 'default-value'
        });
    }

    private constructor(private readonly state: RepresentationBuilderState) {
    }

    public build(): Representation {
        return {
            destinationValues: this.state.destinationValues.map((builder) => builder.build()),
            sourceValues: this.state.sourceValues.map((builder) => builder.build()),
            type: this.state.type,
            value: _.cloneDeep(this.state.value)
        };
    }

    public withSourceValues(newSourceValues: RepresentationValueBuilder[]): RepresentationBuilder {
        const copyOfNewSourceValues = Array.from(newSourceValues);
        return new RepresentationBuilder({
            destinationValues: this.state.destinationValues,
            sourceValues: copyOfNewSourceValues,
            type: this.state.type,
            value: this.state.value
        });
    }

    public withSourceValue(newSourceValue: RepresentationValueBuilder): RepresentationBuilder {
        return new RepresentationBuilder({
            destinationValues: this.state.destinationValues,
            sourceValues: [newSourceValue],
            type: this.state.type,
            value: this.state.value
        });
    }

    public withDestinationValues(newDestinationValues: RepresentationValueBuilder[]): RepresentationBuilder {
        const copyOfNewDestinationValues = Array.from(newDestinationValues);
        return new RepresentationBuilder({
            destinationValues: copyOfNewDestinationValues,
            sourceValues: this.state.sourceValues,
            type: this.state.type,
            value: this.state.value
        });
    }

    public withDestinationValue(newDestinationValue: RepresentationValueBuilder): RepresentationBuilder {
        return new RepresentationBuilder({
            destinationValues: [newDestinationValue],
            sourceValues: this.state.sourceValues,
            type: this.state.type,
            value: this.state.value
        });
    }

    public withValue(newValue: any): RepresentationBuilder {
        const copyOfNewValue = _.cloneDeep(newValue);
        return new RepresentationBuilder({
            destinationValues: this.state.destinationValues,
            sourceValues: this.state.sourceValues,
            type: this.state.type,
            value: copyOfNewValue
        });
    }
}

export const representationBuilder = RepresentationBuilder.create();
