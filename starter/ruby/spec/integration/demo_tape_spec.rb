require 'spec_helper'

describe "TXTing top Justin Bieber song" do
  it "successfully sends a message" do
    io = IO.popen(File.join File.dirname(__FILE__), "../../bin/demo-tape")
    output = io.readlines.join(' ')
    expect(output.include? "Texted").to be_truthy
  end
end
