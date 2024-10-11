import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { CampaignContractUpdated } from "../generated/schema"
import { CampaignContractUpdated as CampaignContractUpdatedEvent } from "../generated/KOL/KOL"
import { handleCampaignContractUpdated } from "../src/kol"
import { createCampaignContractUpdatedEvent } from "./kol-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let campaignContract = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newCampaignContractUpdatedEvent =
      createCampaignContractUpdatedEvent(campaignContract)
    handleCampaignContractUpdated(newCampaignContractUpdatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CampaignContractUpdated created and stored", () => {
    assert.entityCount("CampaignContractUpdated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CampaignContractUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "campaignContract",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
