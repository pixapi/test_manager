Feature.delete_all
Test.delete_all

feature_1 = Feature.create(name: "Automation")
feature_2 = Feature.create(name: "Integration")
feature_3 = Feature.create(name: "Speed")

test_1 = Test.create(name: "Test 1", feature_id: feature_1.id)
test_2 = Test.create(name: "Test 2", status: "passed", feature_id: feature_1.id)
test_3 = Test.create(name: "Test 3", status: "failed", feature_id: feature_1.id)
test_4 = Test.create(name: "Test 4", feature_id: feature_2.id)
test_5 = Test.create(name: "Test 5", status: "passed", feature_id: feature_2.id)
test_6 = Test.create(name: "Test 6", status: "failed", feature_id: feature_2.id)
test_7 = Test.create(name: "Test 7", feature_id: feature_3.id)
test_8 = Test.create(name: "Test 8", status: "passed", feature_id: feature_3.id)
test_9 = Test.create(name: "Test 9", status: "failed", feature_id: feature_3.id)
