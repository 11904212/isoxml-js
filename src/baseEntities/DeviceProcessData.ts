import { ElementCompact } from 'xml-js'

import { TAGS } from './constants'
import { ISOXMLManager } from '../ISOXMLManager'
import { registerEntityClass } from '../classRegistry'
import { fromXML, toXML } from '../utils'

import { Entity, EntityConstructor, AttributesDescription } from '../types'


export type DeviceProcessDataAttributes = {
    DeviceProcessDataObjectId: number
    DeviceProcessDataDDI: string
    DeviceProcessDataProperty: number
    DeviceProcessDataTriggerMethods: number
    DeviceProcessDataDesignator?: string
    DeviceValuePresentationObjectId?: number
    ProprietaryAttributes?: {[name: string]: string}
    ProprietaryTags?: {[tag: string]: ElementCompact[]}
}

const ATTRIBUTES: AttributesDescription = {
    A: { name: 'DeviceProcessDataObjectId', type: 'xs:unsignedShort', isPrimaryId: false },
    B: { name: 'DeviceProcessDataDDI', type: 'xs:hexBinary', isPrimaryId: false },
    C: { name: 'DeviceProcessDataProperty', type: 'xs:unsignedByte', isPrimaryId: false },
    D: { name: 'DeviceProcessDataTriggerMethods', type: 'xs:unsignedByte', isPrimaryId: false },
    E: { name: 'DeviceProcessDataDesignator', type: 'xs:string', isPrimaryId: false },
    F: { name: 'DeviceValuePresentationObjectId', type: 'xs:unsignedShort', isPrimaryId: false },
}
const CHILD_TAGS = {
}

export class DeviceProcessData implements Entity {
    public tag = TAGS.DeviceProcessData

    constructor(public attributes: DeviceProcessDataAttributes, public isoxmlManager: ISOXMLManager) {
    }

    static fromXML(xml: ElementCompact, isoxmlManager: ISOXMLManager, targetClass: EntityConstructor = DeviceProcessData): Promise<Entity> {
        return fromXML(xml, isoxmlManager, targetClass, ATTRIBUTES, CHILD_TAGS)
    }

    toXML(): ElementCompact {
        return toXML(this, ATTRIBUTES, CHILD_TAGS)
    }
}

registerEntityClass(TAGS.DeviceProcessData, DeviceProcessData)