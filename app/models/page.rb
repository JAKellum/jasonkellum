class Page
  class << self
    def list
      [
        :wayfind,
        :onespark,
        :resumebot,
        :ignite,
        :txtout,
        :aiga,
        :matchstiq,
        :asps,
        :catalyst,
        :oppify,
        :trucknseek,
        :combofonts,
        :spinnaker,
        :metrology,
        :traverse,
        :bistro23,
        :rumble,
        :browndog
      ]
    end

    def names
      self.list.map(&:to_s)
    end

    def next_of(name)
      index = self.list.index(name.to_sym)
      return nil unless index.present?

      next_index = (index + 1) % self.list.length
      self.list[next_index].to_s
    end

    def prev_of(name)
      index = self.list.index(name.to_sym)
      return nil unless index.present?

      prev_index = (index - 1) % self.list.length
      self.list[prev_index].to_s
    end
  end
end
