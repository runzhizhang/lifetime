// pages/components/comp/comp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    test: "test"
  },
  lifetimes: {
    created: function(){
      console.log("created",this.data.test)
      this.setData({
        test: "232"
      })
    },
    attached: function(){
      console.log("attached",this.data.test)

    },
    ready: function(){
      console.log("ready")
    },
    moved: function(){
      console.log("moved")
    },
    detached: function(){
      console.log("detached")
    },
    error: function(){
      console.log("error")
    }
  },
  pageLifetimes: {
    show: function(){
      console.log("show")
    },
    hide: function(){
      console.log("hide")
    },
    resize: function(){
      console.log("resize")
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
