import type EquipmentModel from "./EquipmentModel"
import type EquipmentPosition from "./EquipmentPosition"
import type EquipmentStateDate from "./EquipmentStateDate"

export default interface Equipment {
  id: string
  name: string
  model: EquipmentModel | null
  positions: EquipmentPosition[]
  stateDates: EquipmentStateDate[]
}
